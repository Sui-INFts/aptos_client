# Credit Score Smart Contract Integration (The Blockchain Part)

So I built a credit scoring system on Aptos, and here's how I integrated the smart contract with the frontend. It was more complex than I initially thought, but it's working well now.

## The Contract Overview

The smart contract is written in Move and deployed on Aptos testnet. It handles all the credit score logic:
- Minting credit score SBTs (Soulbound Tokens)
- Storing user scores on-chain
- Updating scores (admin only)
- View functions for reading data

## Contract Details

**Module Address**: `0x43e8211c2cfad783147c6f8ce36a4b561f88d9bfaf37f834e1d1c75e563e2cfb`
**Module Name**: `infts_credit_score`

### Key Functions I Built

**Entry Functions** (write operations):
- `mint_sbt()` - Mints a new credit score SBT
- `update_score(user_addr, new_score)` - Updates user score (admin only)

**View Functions** (read operations):
- `has_minted(user_addr)` - Check if user has SBT
- `get_user_sbt(user_addr)` - Get user's SBT token object
- `get_score(token_obj)` - Get score from token
- `get_admin()` - Get admin address
- `get_mint_fee()` - Get current mint fee

## Frontend Integration (The Fun Part)

### My Configuration

I created a config file to keep all the contract details organized:

```typescript
// contract/contracts_testnet.ts

export const INFTS_CREDIT_SCORE = {
  moduleAddress: "0x43e8211c2cfad783147c6f8ce36a4b561f88d9bfaf37f834e1d1c75e563e2cfb",
  moduleName: "infts_credit_score",
  maxCreditScore: 1000,
  defaultMintFee: 0,
};
```

### Aptos Client Setup

I set up the Aptos client to interact with the contract:

```typescript
// lib/aptos-utils.ts

import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

export const getAptosClient = () => {
  const config = new AptosConfig({
    network: Network.TESTNET,
  });
  
  return new Aptos(config);
};

export const getContractConfig = () => {
  return INFTS_CREDIT_SCORE;
};
```

## The Minting Process (The Core Functionality)

### 1. Check if User Can Mint

```typescript
const checkCanMint = async (userAddress: string) => {
  const client = getAptosClient();
  const contractConfig = getContractConfig();
  
  try {
    const hasMinted = await client.view({
      payload: {
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::has_minted`,
        functionArguments: [userAddress],
      },
    });
    
    return !hasMinted[0]; // Can mint if they haven't minted yet
  } catch (error) {
    console.error('Error checking mint status:', error);
    return false;
  }
};
```

### 2. Mint the SBT

```typescript
const mintSBT = async (userAddress: string, imageUrl: string, score: number) => {
  const client = getAptosClient();
  const contractConfig = getContractConfig();
  
  // Prepare the transaction
  const transaction = await client.transaction.build.simple({
    sender: userAddress,
    data: {
      function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::mint_sbt`,
      functionArguments: [imageUrl, score],
    },
  });
  
  // Sign and submit
  const signedTransaction = await client.signAndSubmitTransaction({
    signer: userAddress,
    transaction,
  });
  
  // Wait for confirmation
  const result = await client.waitForTransaction({
    transactionHash: signedTransaction.hash,
  });
  
  return result;
};
```

## The SBT Status Checking (The Tricky Part)

This was the most complex part because of address formatting issues:

### 1. Safe Address Formatting

```typescript
// lib/address-utils.ts

export function formatAddressForContract(accountAddress: unknown): string {
  try {
    let addressString: string;
    
    // Handle different address formats
    if (typeof accountAddress === 'string') {
      addressString = accountAddress;
    } else if (accountAddress instanceof AccountAddress) {
      addressString = accountAddress.toString();
    } else if (typeof (accountAddress as any)?.address === 'string') {
      addressString = (accountAddress as any).address;
    } else {
      addressString = String(accountAddress);
    }
    
    // Remove 0x prefix if present
    if (addressString.startsWith('0x')) {
      addressString = addressString.slice(2);
    }
    
    // Validate hex characters and even length
    if (!/^[0-9a-fA-F]*$/.test(addressString)) {
      addressString = addressString.replace(/[^0-9a-fA-F]/g, '');
    }

    if (addressString.length % 2 !== 0) {
      addressString = '0' + addressString;
    }

    return addressString;
  } catch (error) {
    console.error("Error formatting address:", error);
    throw new Error(`Failed to format address: ${error.message}`);
  }
}
```

### 2. Check SBT Status

```typescript
const checkSBTStatus = async (userAddress: string) => {
  const client = getAptosClient();
  const contractConfig = getContractConfig();
  
  try {
    // Format address safely
    const formattedAddress = formatAddressForContract(userAddress);
    
    // Check if user has minted
    const hasMinted = await client.view({
      payload: {
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::has_minted`,
        functionArguments: [formattedAddress],
      },
    });
    
    if (!hasMinted[0]) {
      return { hasMinted: false, score: 0 };
    }
    
    // Get user's SBT object
    const userSbt = await client.view({
      payload: {
        function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_user_sbt`,
        functionArguments: [formattedAddress],
      },
    });
    
    // Extract token object from Option<Object<Token>>
    const optionValue = userSbt[0];
    let tokenObj = null;
    
    if (optionValue && typeof optionValue === 'object') {
      if ('vec' in optionValue && Array.isArray(optionValue.vec) && optionValue.vec.length > 0) {
        tokenObj = optionValue.vec[0];
      } else {
        tokenObj = optionValue;
      }
    }
    
    if (tokenObj) {
      // Get score from token object
      const score = await client.view({
        payload: {
          function: `${contractConfig.moduleAddress}::${contractConfig.moduleName}::get_score`,
          functionArguments: [String(tokenObj)],
        },
      });
      
      return { hasMinted: true, score: Number(score[0]) };
    }
    
    return { hasMinted: false, score: 0 };
  } catch (error) {
    console.error('Error checking SBT status:', error);
    return { hasMinted: false, score: 0 };
  }
};
```

## The Dashboard Integration (The UI Part)

### 1. SBT Status Hook

```typescript
// hooks/useSBTStatus.ts

export const useSBTStatus = (userAddress: string) => {
  return useQuery({
    queryKey: ["sbtStatus", userAddress],
    queryFn: () => checkSBTStatus(userAddress),
    enabled: !!userAddress,
    refetchOnWindowFocus: true,
    refetchInterval: 10000, // Auto-refresh every 10 seconds
  });
};
```

### 2. Dashboard Component

```typescript
// app/dashboard/page.tsx

export default function Dashboard() {
  const { account } = useWallet();
  const { data: sbtStatus, isLoading } = useSBTStatus(account?.address);
  
  const hasMintedSBT = sbtStatus?.hasMinted || false;
  
  return (
    <div className="dashboard">
      {!hasMintedSBT && (
        <SBTMintComponent />
      )}
      
      <div className="action-buttons">
        <Button disabled={!hasMintedSBT}>
          🔥 Swap Tokens
        </Button>
        <Button disabled={!hasMintedSBT}>
          🤖 AI Insights
        </Button>
        <Button disabled={!hasMintedSBT}>
          💰 DeFi Actions
        </Button>
      </div>
    </div>
  );
}
```

## Error Handling (Because Blockchain Is Unpredictable)

I added comprehensive error handling for various scenarios:

```typescript
const handleContractError = (error: any) => {
  console.error('Contract Error:', error);
  
  if (error.message.includes('User has already minted an SBT')) {
    return 'You have already minted an SBT.';
  } else if (error.message.includes('Insufficient balance')) {
    return 'Insufficient APT balance for minting.';
  } else if (error.message.includes('Transaction failed')) {
    return 'Transaction failed. Please try again.';
  } else {
    return 'An error occurred. Please try again.';
  }
};
```

## The SBT Gating System (The Smart Part)

I implemented a gating system where users need to mint an SBT to access premium features:

```typescript
const SBTGate = ({ children, fallback }: { children: React.ReactNode, fallback: React.ReactNode }) => {
  const { account } = useWallet();
  const { data: sbtStatus } = useSBTStatus(account?.address);
  
  if (sbtStatus?.hasMinted) {
    return <>{children}</>;
  }
  
  return <>{fallback}</>;
};

// Usage
<SBTGate 
  fallback={<SBTMintComponent />}
>
  <PremiumFeatures />
</SBTGate>
```

## Testing the Integration

### Manual Testing
1. **Connect wallet** - Make sure wallet is connected
2. **Check SBT status** - Should show no SBT initially
3. **Mint SBT** - Should work without errors
4. **Check status again** - Should show SBT exists
5. **Try premium features** - Should be enabled

### Edge Cases
- **No wallet connected** - Should handle gracefully
- **Contract not deployed** - Should show error
- **Insufficient balance** - Should show error
- **Already minted** - Should prevent double minting

## Common Issues I Ran Into

### 1. Address Formatting Issues
- **Problem**: "Hex characters are invalid" errors
- **Solution**: Created the `formatAddressForContract` utility

### 2. Option Type Handling
- **Problem**: Move Option<T> types not handled correctly
- **Solution**: Added proper Option type parsing

### 3. Transaction Failures
- **Problem**: Transactions failing silently
- **Solution**: Added proper error handling and user feedback

### 4. SBT Status Not Updating
- **Problem**: Dashboard not reflecting SBT status
- **Solution**: Added auto-refresh and manual refresh buttons

## The Result

The integration is working well! Users can:
- **Mint credit score SBTs** with custom metadata
- **Check SBT status** in real-time
- **Access premium features** after minting
- **Get proper error messages** when things go wrong

## Best Practices I Learned

1. **Always validate addresses** - Different wallets use different formats
2. **Handle Option types** - Move Option<T> needs special handling
3. **Add error handling** - Blockchain operations can fail
4. **Implement auto-refresh** - SBT status changes need to be reflected
5. **Test edge cases** - Network issues, insufficient balance, etc.

## The Bottom Line

Integrating with the Aptos smart contract was challenging but rewarding. The SBT gating system creates a nice incentive for users to mint their credit score tokens, and the real-time status checking keeps everything in sync.

*The combination of Move smart contracts and React frontend creates a powerful credit scoring system that's both decentralized and user-friendly.*
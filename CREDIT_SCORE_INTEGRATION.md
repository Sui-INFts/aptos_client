# Credit Score Smart Contract Integration

This document covers how I integrated the INFTs credit score smart contract with the frontend.

## Contract Overview

The smart contract is written in Move and deployed on Aptos testnet. It handles:
- Minting credit score SBTs (Soulbound Tokens)
- Storing user scores on-chain
- Updating scores (admin only)
- View functions for reading data

## Contract Details

**Module Address**: `0x[your_module_address]`
**Module Name**: `infts_credit_score`

### Key Functions

**Entry Functions** (write operations):
- `mint_sbt()` - Mints a new credit score SBT
- `update_score(user_addr, new_score)` - Updates user score (admin)

**View Functions** (read operations):
- `has_minted(user_addr)` - Check if user has SBT
- `get_user_sbt(user_addr)` - Get user's SBT token object
- `get_score(token_obj)` - Get score from token
- `get_admin()` - Get admin address
- `get_mint_fee()` - Get current mint fee

## Frontend Integration

### Configuration

I created a config file for contract details:

```typescript
// contract/contracts_testnet.ts

export const INFTS_CREDIT_SCORE = {
  moduleAddress: "0x...",
  moduleName: "infts_credit_score",
  maxCreditScore: 1000,
  defaultMintFee: 0,
};
```

### Aptos Client Setup

```typescript
// lib/aptos-utils.ts

export const getAptosClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_APTOS_API_KEY || 'fallback_key';
  
  return new Aptos(
    new AptosConfig({
      network: NETWORK,
      clientConfig: { API_KEY: apiKey },
    })
  );
};
```

### Reading Data

To check if a user has minted:

```typescript
const client = getAptosClient();
const hasMinted = await client.view({
  payload: {
    function: `${config.moduleAddress}::${config.moduleName}::has_minted`,
    functionArguments: [userAddress],
  },
});
```

To get user's score:

```typescript
// First get the token object
const userSbt = await client.view({
  payload: {
    function: `${config.moduleAddress}::${config.moduleName}::get_user_sbt`,
    functionArguments: [userAddress],
  },
});

// Then get the score
const score = await client.view({
  payload: {
    function: `${config.moduleAddress}::${config.moduleName}::get_score`,
    functionArguments: [String(userSbt[0])],
  },
});
```

### Writing Data (Minting)

Minting requires wallet signature:

```typescript
const handleMintSBT = async () => {
  const client = getAptosClient();
  
  // Build transaction
  const transaction = await client.transaction.build.simple({
    sender: account.address.toString(),
    data: {
      function: `${config.moduleAddress}::${config.moduleName}::mint_sbt`,
      functionArguments: [],
    },
    options: { maxGasAmount: 10_000 },
  });
  
  // Sign transaction
  const signedTx = await signTransaction({ 
    transactionOrPayload: transaction 
  });
  
  // Submit transaction
  const committedTx = await client.transaction.submit.simple({
    transaction,
    senderAuthenticator: signedTx.authenticator,
  });
  
  // Wait for confirmation
  await client.waitForTransaction({ 
    transactionHash: committedTx.hash 
  });
};
```

## Type Handling

### Move Option Type

The contract returns `Option<Object<Token>>` for `get_user_sbt`. I handle it like this:

```typescript
const optionValue = userSbt[0];
let tokenObj = null;

if (optionValue && typeof optionValue === 'object') {
  if ('vec' in optionValue && Array.isArray(optionValue.vec)) {
    tokenObj = optionValue.vec[0];
  } else {
    tokenObj = optionValue;
  }
}
```

### Address Conversion

Aptos SDK expects string addresses:

```typescript
// Convert AccountAddress to string
const addressString = AccountAddress.from(account.address).toString();

// Use in view calls
await client.view({
  payload: {
    function: `...::has_minted`,
    functionArguments: [addressString],
  },
});
```

## Components

### CreditScoreMint

Main component for minting and viewing SBTs:

```typescript
export function CreditScoreMint() {
  const { account, signTransaction } = useWallet();
  
  const { data: creditScoreData } = useQuery({
    queryKey: ["creditScore", account?.address],
    queryFn: async () => {
      // Fetch SBT data
    },
  });
  
  const handleMintSBT = async () => {
    // Mint logic
  };
  
  return (
    <Card>
      {creditScoreData?.hasMinted ? (
        <div>Score: {creditScoreData.score}</div>
      ) : (
        <Button onClick={handleMintSBT}>Mint SBT</Button>
      )}
    </Card>
  );
}
```

## Error Handling

Common issues and solutions:

**Type mismatch errors**:
- Convert addresses to strings
- Convert token objects to strings for view calls

**Transaction failures**:
- Check gas amount
- Verify function arguments
- Ensure wallet is connected

**View function errors**:
- Confirm contract is deployed
- Check function name spelling
- Verify argument types

## Testing

To test the integration:

1. Go to `/test-contract` page
2. Click "Test Contract Connection"
3. Should show contract info (admin, mint fee, total minted)
4. Try minting an SBT
5. Check "My SBTs" page to verify

## Next Steps

Potential improvements:
- Add score update functionality (for admins)
- Implement score history tracking
- Create admin dashboard
- Add batch minting support

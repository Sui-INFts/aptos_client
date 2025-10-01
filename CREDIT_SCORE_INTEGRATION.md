# INFTs Credit Score Protocol Integration

This document explains how the `aptos_client` Next.js application integrates with the deployed `aptos_sm` smart contract.

## Contract Overview

The `aptos_sm` contract implements a Credit Score Soulbound Token (SBT) system on Aptos with the following features:

- **Soulbound Tokens**: Non-transferable tokens that represent credit scores
- **Admin Management**: Admin can update scores and manage the contract
- **Mint Fee System**: Configurable mint fees (currently 0 APT)
- **Credit Scoring**: Scores range from 0-1000

## Contract Address

- **Module Address**: `43e8211c2cfad783147c6f8ce36a4b561f88d9bfaf37f834e1d1c75e563e2cfb`
- **Module Name**: `infts_credit_score`
- **Network**: Testnet

## Integration Files

### 1. ABI Definition
- **File**: `contract/abi/infts_credit_score_abi.ts`
- **Purpose**: Defines the contract's Application Binary Interface
- **Contains**: All entry functions, view functions, events, and structs

### 2. Contract Configuration
- **File**: `contract/contracts_testnet.ts`
- **Purpose**: Stores contract addresses and configuration
- **Updated**: Now points to the deployed `aptos_sm` contract

### 3. Utility Functions
- **File**: `lib/aptos-utils.ts`
- **Purpose**: Helper functions for contract interactions
- **Features**:
  - Aptos client setup
  - Surf client for ABI-based interactions
  - Function call formatting
  - Type definitions

### 4. React Components

#### CreditScoreMint Component
- **File**: `components/CreditScoreMint.tsx`
- **Purpose**: Allows users to mint their Credit Score SBT
- **Features**:
  - Check if user has already minted
  - Display current credit score
  - Mint new SBT with gasless transactions
  - Real-time data updates

#### ContractInfo Component
- **File**: `components/ContractInfo.tsx`
- **Purpose**: Displays contract information and statistics
- **Features**:
  - Admin address
  - Mint fee information
  - Total tokens minted
  - Contract configuration

### 5. Pages

#### Credit Score Page
- **File**: `app/credit-score/page.tsx`
- **Purpose**: Main page for Credit Score SBT interactions
- **Features**: Integrates both CreditScoreMint and ContractInfo components

#### Test Contract Page
- **File**: `app/test-contract/page.tsx`
- **Purpose**: Test page to verify contract connectivity
- **Features**: Basic contract function calls and configuration display

## Key Functions

### Entry Functions (Write Operations)
- `mint_sbt()` - Mint a new Credit Score SBT
- `update_score()` - Update a user's credit score (admin only)
- `set_pending_admin()` - Set pending admin (admin only)
- `accept_admin()` - Accept admin role
- `update_mint_fee()` - Update mint fee (admin only)

### View Functions (Read Operations)
- `get_admin()` - Get current admin address
- `get_mint_fee()` - Get current mint fee
- `get_total_minted()` - Get total number of minted SBTs
- `has_minted(address)` - Check if user has minted
- `get_user_score(address)` - Get user's credit score
- `get_user_sbt(address)` - Get user's SBT object

## Usage

### 1. Navigate to Credit Score Page
```
http://localhost:3000/credit-score
```

### 2. Connect Wallet
- Use the wallet selector in the header
- Supported wallets: Petra, Nightly, etc.

### 3. Mint Credit Score SBT
- Click "Mint Credit Score SBT" button
- Sign the transaction
- Wait for confirmation

### 4. View Contract Information
- See current contract stats
- View admin information
- Check mint fees

## Environment Variables

Make sure to set these environment variables:

```env
NEXT_PUBLIC_APP_NETWORK=testnet
NEXT_PUBLIC_APTOS_API_KEY=your_aptos_api_key
```

## Testing

### Test Contract Connection
1. Navigate to `/test-contract`
2. Connect your wallet
3. Click "Test Contract" to verify connectivity
4. View contract information

### Manual Testing
1. Mint an SBT
2. Check if it appears in your wallet
3. Verify the score is 0 (default)
4. Check contract stats update

## Architecture

The integration follows this pattern:

1. **Frontend** → **Aptos SDK** → **Blockchain**
2. **React Query** for data caching and real-time updates
3. **Surf Client** for ABI-based contract interactions
4. **Wallet Adapter** for wallet connections

## Next Steps

1. **Admin Functions**: Add admin-only components for score updates
2. **Batch Operations**: Implement batch score updates
3. **Event Listening**: Add real-time event monitoring
4. **Analytics**: Add usage statistics and charts
5. **Mobile Optimization**: Improve mobile experience

## Troubleshooting

### Common Issues

1. **Contract Not Found**: Verify the contract address is correct
2. **Transaction Failed**: Check gas limits and wallet balance
3. **View Function Errors**: Ensure the contract is deployed and accessible
4. **Wallet Connection**: Make sure wallet is connected to testnet

### Debug Steps

1. Check browser console for errors
2. Verify environment variables
3. Test contract connection on `/test-contract`
4. Check Aptos Explorer for transaction status

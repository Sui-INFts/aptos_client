import { AccountAddress } from "@aptos-labs/ts-sdk";

/**
 * Safely converts an account address to a string format suitable for smart contract calls
 */
export function formatAddressForContract(accountAddress: unknown): string {
  try {
    let addressString: string;
    
    // Handle different address formats
    if (typeof accountAddress === 'string') {
      addressString = accountAddress;
    } else if (accountAddress && typeof accountAddress.toString === 'function') {
      addressString = accountAddress.toString();
    } else {
      throw new Error('Invalid address format');
    }
    
    // Remove 0x prefix if present
    if (addressString.startsWith('0x')) {
      addressString = addressString.slice(2);
    }
    
    // Ensure the address is valid hex and has even length
    if (!/^[0-9a-fA-F]+$/.test(addressString)) {
      throw new Error('Address contains invalid hex characters');
    }
    
    if (addressString.length % 2 !== 0) {
      throw new Error('Address has odd length');
    }
    
    return addressString;
  } catch (error) {
    console.error('Address formatting error:', error);
    throw new Error(`Failed to format address: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Safely creates an AccountAddress object from various input formats
 */
export function createAccountAddress(address: unknown): AccountAddress {
  try {
    if (address instanceof AccountAddress) {
      return address;
    }
    
    if (typeof address === 'string') {
      return AccountAddress.from(address);
    }
    
    if (address && typeof address.toString === 'function') {
      return AccountAddress.from(address.toString());
    }
    
    throw new Error('Invalid address format for AccountAddress creation');
  } catch (error) {
    console.error('AccountAddress creation error:', error);
    throw new Error(`Failed to create AccountAddress: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

/**
 * Validates if an address string is a valid Aptos address
 */
export function isValidAptosAddress(address: string): boolean {
  try {
    // Remove 0x prefix if present
    const cleanAddress = address.startsWith('0x') ? address.slice(2) : address;
    
    // Check if it's valid hex
    if (!/^[0-9a-fA-F]+$/.test(cleanAddress)) {
      return false;
    }
    
    // Check if it has even length
    if (cleanAddress.length % 2 !== 0) {
      return false;
    }
    
    // Try to create AccountAddress to validate
    AccountAddress.from(cleanAddress);
    return true;
  } catch {
    return false;
  }
}

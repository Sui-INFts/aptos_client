import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";
import { createSurfClient } from "@thalalabs/surf";
import { INFTS_CREDIT_SCORE_ABI } from "@/contract/abi/infts_credit_score_abi";
import { getNetworkVariables } from "@/contract";

export const NETWORK = (process.env.NEXT_PUBLIC_APP_NETWORK as Network) || "testnet";

export const getAptosClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_APTOS_API_KEY || "aptoslabs_ZEqHVtzhURY_HgUFmpfaYUykA2NcoxejSkvKnSm5p9pUq";
  
  return new Aptos(
    new AptosConfig({
      network: NETWORK,
      clientConfig: {
        API_KEY: apiKey,
      },
    })
  );
};

export const getSurfClient = () =>
  createSurfClient(getAptosClient()).useABI(INFTS_CREDIT_SCORE_ABI);

export const getContractConfig = () => {
  const config = getNetworkVariables();
  return {
    moduleAddress: config.MODULE_ADDRESS,
    moduleName: config.INFTS_CREDIT_SCORE_MODULE,
    maxCreditScore: config.MAX_CREDIT_SCORE,
    defaultMintFee: config.DEFAULT_MINT_FEE,
  };
};

// Helper function to format function calls
export const formatFunctionCall = (functionName: string, args: any[] = []) => {
  const config = getContractConfig();
  return {
    function: `${config.moduleAddress}::${config.moduleName}::${functionName}` as `${string}::${string}::${string}`,
    functionArguments: args,
  };
};

// Type definitions for the contract
export interface CreditScoreData {
  score: number;
  lastUpdated: number;
  mintTimestamp: number;
  hasMinted: boolean;
  tokenObject?: string;
}

export type CreditScoreDataOrNull = CreditScoreData | null;

export interface ContractInfo {
  admin: string;
  pendingAdmin?: string;
  mintFeeCollector: string;
  mintFee: number;
  totalMinted: number;
}

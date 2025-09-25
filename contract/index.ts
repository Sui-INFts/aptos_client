import { getContractConfig } from "./config";

type Network = "mainnet" | "testnet"

const network = (process.env.NEXT_PUBLIC_APP_NETWORK as Network) || "testnet";

function getNetworkVariables() {
    return getContractConfig();
}

export { getNetworkVariables, network };
export type { Network };

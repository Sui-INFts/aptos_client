import { CreditScoreMint } from "@/components/CreditScoreMint";
import { ContractInfo } from "@/components/ContractInfo";

export default function CreditScorePage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">
          INFTs Credit Score Protocol
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mint and manage your DeFi Credit Score Soulbound Tokens on Aptos
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Soulbound Tokens
          </span>
          <span className="px-3 py-1 bg-chart-2/10 text-chart-2 text-sm font-medium rounded-full">
            Credit Scoring
          </span>
          <span className="px-3 py-1 bg-chart-3/10 text-chart-3 text-sm font-medium rounded-full">
            DeFi Integration
          </span>
        </div>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <CreditScoreMint />
        </div>
        <div className="space-y-6">
          <ContractInfo />
        </div>
      </div>
    </div>
  );
}

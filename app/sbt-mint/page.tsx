import { SBTMint } from "@/components/SBTMint";

export default function SBTMintPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">
          Mint Credit Score SBT
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Mint your DeFi Credit Score Soulbound Token with the permanent INFTs image
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Permanent Image
          </span>
          <span className="px-3 py-1 bg-chart-2/10 text-chart-2 text-sm font-medium rounded-full">
            Nodit Storage
          </span>
          <span className="px-3 py-1 bg-chart-3/10 text-chart-3 text-sm font-medium rounded-full">
            Soulbound Tokens
          </span>
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <SBTMint />
      </div>
    </div>
  );
}

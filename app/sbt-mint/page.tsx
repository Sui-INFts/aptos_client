import { SBTImageUpload } from "@/components/SBTImageUpload";
import { ContractInfo } from "@/components/ContractInfo";

export default function SBTMintPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient">
          Mint Credit Score SBT with Image
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Upload your custom image and mint your DeFi Credit Score Soulbound Token on Aptos
        </p>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Image Upload
          </span>
          <span className="px-3 py-1 bg-chart-2/10 text-chart-2 text-sm font-medium rounded-full">
            Nodit Storage
          </span>
          <span className="px-3 py-1 bg-chart-3/10 text-chart-3 text-sm font-medium rounded-full">
            Soulbound Tokens
          </span>
        </div>
      </div>
      
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <SBTImageUpload />
        </div>
        <div className="space-y-6">
          <ContractInfo />
        </div>
      </div>
    </div>
  );
}

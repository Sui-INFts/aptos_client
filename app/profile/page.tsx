"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { HeroHeader } from "@/components/header";
import { PlusCircle, Wallet, Copy, Check, Activity } from "lucide-react";
import FooterSection from "@/components/footer";
import { toast } from "@/components/ui/use-toast";
import { NFTGrid } from "@/components/NFTGrid";
import { TransactionList } from "@/components/TransactionList";
import { aptosClient } from "@/app/utils/aptosClient";

// NFTData type
interface NFTData {
  id: string;
  name: string;
  description: string;
  image_url: string;
  evolution_stage: number;
  interaction_count: number;
  atoma_model_id: string;
  content?: {
    fields?: {
      owner?: string;
      creator?: string;
    };
  };
  isFavorite?: boolean;
}

interface Transaction {
  hash: string;
  timestamp?: string;
  type?: string;
}

const Profile: React.FC = () => {
  const router = useRouter();
  const { account } = useWallet();
  const [balance, setBalance] = React.useState<string>("0");
  const [aptPrice, setAptPrice] = React.useState<number>(0);
  const [copied, setCopied] = React.useState(false);
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = React.useState(false);
  const [networkStatus, setNetworkStatus] = React.useState<{
    status: 'online' | 'offline' | 'syncing';
    lastBlock: number;
    peers: number;
  }>({
    status: 'online',
    lastBlock: 0,
    peers: 0
  });
  const [activeTab, setActiveTab] = React.useState('Collected');
  const [ownedNFTs, setOwnedNFTs] = React.useState<NFTData[]>([]);
  const [favoriteNFTs, setFavoriteNFTs] = React.useState<NFTData[]>([]);
  const [isLoadingNFTs, setIsLoadingNFTs] = React.useState(false);

  // Load favorite NFTs from localStorage on component mount
  React.useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteNFTs');
    if (savedFavorites) {
      setFavoriteNFTs(JSON.parse(savedFavorites));
    }
  }, []);

  // Save favorite NFTs to localStorage whenever they change
  React.useEffect(() => {
    localStorage.setItem('favoriteNFTs', JSON.stringify(favoriteNFTs));
  }, [favoriteNFTs]);

  const handleFavoriteToggle = (nftId: string) => {
    setOwnedNFTs(prevNFTs => 
      prevNFTs.map(nft => 
        nft.id === nftId ? { ...nft, isFavorite: !nft.isFavorite } : nft
      )
    );

    const nft = ownedNFTs.find(n => n.id === nftId);
    if (nft) {
      if (nft.isFavorite) {
        setFavoriteNFTs(prev => prev.filter(f => f.id !== nftId));
      } else {
        setFavoriteNFTs(prev => [...prev, { ...nft, isFavorite: true }]);
      }
    }
  };

  React.useEffect(() => {
    const fetchAptPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=aptos&vs_currencies=usd');
        const data = await response.json();
        setAptPrice(data.aptos.usd);
      } catch (error) {
        console.error("Error fetching APT price:", error);
      }
    };

    fetchAptPrice();
    // Refresh price every 60 seconds
    const interval = setInterval(fetchAptPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const fetchBalance = async () => {
      if (account?.address) {
        try {
          const client = aptosClient();
          const resources = await client.getAccountResources({
            accountAddress: account.address,
          });

          const aptResource = resources.find(r => r.type === "0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>");
          if (aptResource) {
            const balance = (aptResource.data as any).coin.value;
            setBalance(balance);
          }
        } catch (error) {
          console.error("Error fetching balance:", error);
          setBalance("0");
        }
      }
    };
    fetchBalance();
  }, [account?.address]);

  React.useEffect(() => {
    const fetchNetworkStatus = async () => {
      try {
        const client = aptosClient();
        const ledgerInfo = await client.getLedgerInfo();
        setNetworkStatus({
          status: 'online',
          lastBlock: Number(ledgerInfo.block_height),
          peers: 0 // Aptos doesn't expose peer count in the same way
        });
      } catch (error) {
        console.error("Error fetching network status:", error);
        setNetworkStatus(prev => ({ ...prev, status: 'offline' }));
      }
    };

    fetchNetworkStatus();
    const interval = setInterval(fetchNetworkStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    const fetchOwnedNFTs = async () => {
      if (!account?.address) return;
      
      setIsLoadingNFTs(true);
      try {
        // This is a placeholder implementation
        // You would need to implement the actual NFT fetching logic based on your Aptos smart contract
        console.log('NFT fetching not yet implemented for Aptos');
        setOwnedNFTs([]);
        
      } catch (error) {
        console.error("Error fetching owned NFTs:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch NFTs",
        });
      } finally {
        setIsLoadingNFTs(false);
      }
    };

    fetchOwnedNFTs();
  }, [account?.address]);

  React.useEffect(() => {
    const fetchTransactions = async () => {
      if (!account?.address) return;
      
      setIsLoadingTransactions(true);
      try {
        const client = aptosClient();
        const transactions = await client.getAccountTransactions({
          accountAddress: account.address,
          options: {
            limit: 20
          }
        });

        const formattedTransactions = transactions.map(txn => ({
          hash: txn.hash,
          timestamp: txn.timestamp,
          type: 'transaction'
        }));

        setTransactions(formattedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch transactions",
        });
      } finally {
        setIsLoadingTransactions(false);
      }
    };
  
    fetchTransactions();
    // Refresh transactions every 30 seconds
    const interval = setInterval(fetchTransactions, 30000);
    return () => clearInterval(interval);
  }, [account?.address]);

  const handleCreateNFT = () => {
    router.push("/create");
  };

  const handleCopyAddress = () => {
    if (account?.address) {
      navigator.clipboard.writeText(account.address);
      setCopied(true);
      toast({
        title: "Success",
        description: "Address copied to clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getDisplayNFTs = () => {
    switch(activeTab) {
      case 'Collected':
        return ownedNFTs;
      case 'Favorited':
        return favoriteNFTs;
      case 'Offers made':
        return [];
      default:
        return ownedNFTs;
    }
  };

  const formattedBalance = balance ? (parseInt(balance) / Math.pow(10, 8)).toFixed(2) : "0.00";
  const usdValue = balance ? ((parseInt(balance) / Math.pow(10, 8)) * aptPrice).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen w-full bg-black flex flex-col">
      <HeroHeader />
      {/* Profile Info Section */}
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 flex-1">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
          <div className="w-30 h-30 rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border-primary/30 flex items-center justify-center overflow-hidden shadow-xl">
          </div>
          <div className="flex-1 text-left space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-3xl font-bold text-white">
                <span>{account ? `${account.address.toStringLong().slice(0, 7)}...${account.address.toStringLong().slice(-4)}` : 'Wallet_Address'}</span>
              </div>
              {account && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyAddress}
                  className="h-8 w-8 hover:bg-zinc-800/50 transition-colors"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-zinc-400" />
                  )}
                </Button>
              )}
            </div>
            {/* Network Status */}
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${
                networkStatus.status === 'online' ? 'bg-green-500' : 
                networkStatus.status === 'syncing' ? 'bg-yellow-500' : 'bg-red-500'
              }`} />
              <span className="text-sm text-zinc-400">
                {networkStatus.status === 'online' ? 'Connected' : 
                  networkStatus.status === 'syncing' ? 'Syncing' : 'Offline'}
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4 items-center">
            {account ? (
              <>
                <div className="flex items-center space-x-3 bg-zinc-900/50 px-4 py-2.5 rounded-lg border border-zinc-800/50 h-11 shadow-sm">
                  <Wallet className="h-4 w-4 text-zinc-400" />
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-white">{formattedBalance} APT</span>
                    <span className="text-sm text-zinc-500">|</span>
                    <span className="text-sm font-medium text-white">${usdValue}</span>
                  </div>
                </div>
                <Button 
                  size="lg" 
                  variant="default" 
                  onClick={handleCreateNFT} 
                  className="bg-primary text-primary-foreground h-11 shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Mint INFT
                </Button>
              </>
            ) : (
              <Button variant="outline">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-800/50 mb-8 pb-2 w-full">
          {['Collected', 'Offers made', 'Favorited', 'Activity'].map(tab => (
            <Button 
              key={tab} 
              variant="ghost" 
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] rounded-lg px-4 py-2.5 text-base font-medium justify-center transition-all duration-200 ${
                activeTab === tab 
                  ? 'text-white bg-zinc-800/50 shadow-sm' 
                  : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>

        {/* Filters/Search/Sort */}
        <div className="flex flex-wrap gap-3 items-center mb-8">
          <Button variant="outline" size="sm" className="hover:bg-zinc-800/50 border-zinc-800/50">Status</Button>
          <input
            type="text"
            placeholder="Search by name"
            className="border border-zinc-800/50 rounded-lg px-4 py-2 text-sm bg-zinc-900/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
            style={{ minWidth: 200 }}
          />
          <Button variant="outline" size="sm" className="hover:bg-zinc-800/50 border-zinc-800/50">Recently received</Button>
        </div>
        
        {/* NFT Display */}
        {(activeTab === 'Collected' || activeTab === 'Favorited') && (
          <NFTGrid 
            nfts={getDisplayNFTs()} 
            isLoading={isLoadingNFTs} 
            onFavoriteToggle={handleFavoriteToggle}
          />
        )}
        
        {activeTab === 'Activity' && (
          <TransactionList transactions={transactions} isLoading={isLoadingTransactions} />
        )}
        
        {/* Empty states for other tabs */}
        {activeTab === 'Offers made' && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-24 h-24 bg-zinc-900/50 rounded-full flex items-center justify-center mb-4">
              <Activity className="w-12 h-12 text-zinc-600" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No {activeTab} Found</h3>
            <p className="text-zinc-400">You don&apos;t have any {activeTab.toLowerCase()} yet.</p>
          </div>
        )}
      </div>
      <FooterSection />
    </div>
  );
};

export default Profile;
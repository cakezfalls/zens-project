import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import icon from '../public/ZERO_icons/icons/PNG/square/icon_square_dark.png';


import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  goerli,
  optimismGoerli,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const zero = {
  id: 543210,
  name: 'Zero',
  iconUrl: icon,
  iconBackground: '#fff',
  nativeCurrency: { name: 'Zero Network', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.zerion.io/v1/zero'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://explorer.zero.network' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
};

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [goerli, optimismGoerli, zero],
  ssr: true, 
});

const queryClient = new QueryClient();




createRoot(document.getElementById('root')).render(
  <StrictMode>
   <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize='compact' initialChain={goerli}>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)

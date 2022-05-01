import { ChainId } from './constants';

export const WHITELISTED_COLLECTIONS: Record<
  string,
  {
    name: string;
    symbol: string;
    origin: number;
    contracts: { [chainId in ChainId]: string };
  }
> = {
  MFNFT: {
    name: 'Multifaucet NFT',
    symbol: 'MFNFT',
    origin: ChainId.RINKEBY,
    contracts: {
      [ChainId.RINKEBY]: '0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b',
      [ChainId.BSC_TESTNET]: '0x158Fb544FCaeca31A91A741828573dB388F0aE61',
      [ChainId.FUJI]: '0x158Fb544FCaeca31A91A741828573dB388F0aE61',
      [ChainId.MUMBAI]: '0x8a5e678Aa7A92E3A9D092365aA676da77f58006A',
      [ChainId.ARBITRUM_RINKEBY]: '0xcfe1acC0932C376c6AC081ee5134858810E59b48',
      [ChainId.OPTIMISM_KOVAN]: '0xE86b8490104e7B54E4179bE020c608635dCC4C1f',
      [ChainId.FANTOM_TESTNET]: '0xE86b8490104e7B54E4179bE020c608635dCC4C1f',
    },
  },
};

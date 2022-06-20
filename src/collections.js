import { ChainId } from './constants';

export const WHITELISTED_COLLECTIONS = {
  MFNFT: {
    name: 'Multifaucet NFT',
    symbol: 'MFNFT',
    origin: ChainId.RINKEBY,
    contracts: {
      [ChainId.RINKEBY]: '0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b',
      [ChainId.BSC_TESTNET]: '0xcDBaE8E7215f5CB660614bbF4d64b3fE14A40015',
      [ChainId.FUJI]: '0x5d1e536082d7d31B3963172eA83745f7Cc844550',
      [ChainId.MUMBAI]: '0xEffCB05dE841a48ba0882CB4b6fA72D210640AdB',
      [ChainId.ARBITRUM_RINKEBY]: '0xF9b9D5f7f015249c2D3F64472fF86dECf18d07CD',
      [ChainId.OPTIMISM_KOVAN]: '0x45f6Fa9185160712EeADd70584A5C2E0bd8B1835',
      [ChainId.FANTOM_TESTNET]: '0xb6a7353f29FB9F6467647418eb8EDD4bf317a8FF',
    },
  },
};

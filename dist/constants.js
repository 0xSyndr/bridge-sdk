export var ChainId;
(function (ChainId) {
    ChainId[ChainId["RINKEBY"] = 4] = "RINKEBY";
    ChainId[ChainId["BSC_TESTNET"] = 97] = "BSC_TESTNET";
    ChainId[ChainId["FUJI"] = 43113] = "FUJI";
    ChainId[ChainId["MUMBAI"] = 80001] = "MUMBAI";
    ChainId[ChainId["ARBITRUM_RINKEBY"] = 421611] = "ARBITRUM_RINKEBY";
    ChainId[ChainId["OPTIMISM_KOVAN"] = 69] = "OPTIMISM_KOVAN";
    ChainId[ChainId["FANTOM_TESTNET"] = 4002] = "FANTOM_TESTNET";
})(ChainId || (ChainId = {}));

export const CHAIN_MAPPABLE =[
    [ChainId.RINKEBY, 'Rinkeby'],
    [ChainId.BSC_TESTNET, 'BSC Testnet'],
    [ChainId.FUJI, 'Fuji'],
    [ChainId.MUMBAI, 'Mumbai'],
    [ChainId.ARBITRUM_RINKEBY, 'Arbitrum Rinkeby'],
    [ChainId.OPTIMISM_KOVAN, 'Optimism Kovan'],
    [ChainId.FANTOM_TESTNET, 'Fantom Testnet'],
];

export const LAYERZERO_CHAINIDS = {
    [ChainId.RINKEBY]: 10001,
    [ChainId.BSC_TESTNET]: 10002,
    [ChainId.FUJI]: 10006,
    [ChainId.MUMBAI]: 10009,
    [ChainId.ARBITRUM_RINKEBY]: 10010,
    [ChainId.OPTIMISM_KOVAN]: 10011,
    [ChainId.FANTOM_TESTNET]: 10012,
};

export const LAYERZERO_ENDPOINTS = {
    [ChainId.RINKEBY]: '0x79a63d6d8BBD5c6dfc774dA79bCcD948EAcb53FA',
    [ChainId.BSC_TESTNET]: '0x6Fcb97553D41516Cb228ac03FdC8B9a0a9df04A1',
    [ChainId.FUJI]: '0x93f54D755A063cE7bB9e6Ac47Eccc8e33411d706',
    [ChainId.MUMBAI]: '0xf69186dfBa60DdB133E91E9A4B5673624293d8F8',
    [ChainId.ARBITRUM_RINKEBY]: '0x4D747149A57923Beb89f22E6B7B97f7D8c087A00',
    [ChainId.OPTIMISM_KOVAN]: '0x72aB53a133b27Fa428ca7Dc263080807AfEc91b5',
    [ChainId.FANTOM_TESTNET]: '0x7dcAD72640F835B0FA36EFD3D6d3ec902C7E5acf',
};

export const BRIDGE_FEES = {
    [ChainId.RINKEBY]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
    [ChainId.BSC_TESTNET]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
    [ChainId.FUJI]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
    [ChainId.MUMBAI]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
    [ChainId.ARBITRUM_RINKEBY]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
    [ChainId.OPTIMISM_KOVAN]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
    [ChainId.FANTOM_TESTNET]: {
        [ChainId.RINKEBY]: '0.01',
        [ChainId.BSC_TESTNET]: '0.01',
        [ChainId.FUJI]: '0.05',
        [ChainId.MUMBAI]: '5',
        [ChainId.ARBITRUM_RINKEBY]: '0.005',
        [ChainId.OPTIMISM_KOVAN]: '0.005',
        [ChainId.FANTOM_TESTNET]: '2',
    },
};

export const PARAKEET_BRIDGE_ADDRESS = {
    [ChainId.RINKEBY]: '0xF6317bAa750cd25aCBa42EB4dd8A60B26339C866',
    [ChainId.BSC_TESTNET]: '0xCE79208126dA1552BB4dC2a3938D1a1825e175e1',
    [ChainId.FUJI]: '0x16F19Fb78085222723790904f576E27EC442f839',
    [ChainId.MUMBAI]: '0xFF6B9f58F86a960feDC21b58364eB2B6ef8AEBec',
    [ChainId.ARBITRUM_RINKEBY]: '0x77B730ba8828009d05104d6aF20e9564aed61503',
    [ChainId.OPTIMISM_KOVAN]: '0x42458fDC5c1Cf8Ffe5452d4a7142963b00f04A83',
    [ChainId.FANTOM_TESTNET]: '0x98C550F0FA2C5FA2a4Ae24a48Fa29F3204F8698B',
};

export const PROVIDERS = {
    [ChainId.RINKEBY]: 'https://eth-rinkeby.alchemyapi.io/v2/8fu8zXHta9pwaaDpEj9IsyldC-Ds8-sg',
    [ChainId.BSC_TESTNET]: 'https://speedy-nodes-nyc.moralis.io/4c7062cc10dfd866ae0a0d97/bsc/testnet',
    [ChainId.FUJI]: 'https://speedy-nodes-nyc.moralis.io/4c7062cc10dfd866ae0a0d97/avalanche/testnet',
    [ChainId.MUMBAI]: 'https://polygon-mumbai.g.alchemy.com/v2/8fu8zXHta9pwaaDpEj9IsyldC-Ds8-sg',
    [ChainId.ARBITRUM_RINKEBY]: 'https://arb-rinkeby.g.alchemy.com/v2/TQc2Bliod7XJykNTw2_JhKXUpxIKCJBU',
    [ChainId.OPTIMISM_KOVAN]: 'https://opt-kovan.g.alchemy.com/v2/8fu8zXHta9pwaaDpEj9IsyldC-Ds8-sg',
    [ChainId.FANTOM_TESTNET]: 'https://rpc.testnet.fantom.network/',
};

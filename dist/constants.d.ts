export declare enum ChainId {
    RINKEBY = 4,
    BSC_TESTNET = 97,
    FUJI = 43113,
    MUMBAI = 80001,
    ARBITRUM_RINKEBY = 421611,
    OPTIMISM_KOVAN = 69,
    FANTOM_TESTNET = 4002
}
export declare type ChainProp<T> = {
    [chainId in ChainId]: T;
};
export declare type ChainPropMappable<T> = Map<ChainId, T>;
export declare const CHAIN_MAPPABLE: ChainPropMappable<string>;
export declare const LAYERZERO_CHAINIDS: ChainProp<number>;
export declare const LAYERZERO_ENDPOINTS: ChainProp<string>;
export declare const BRIDGE_FEES: ChainProp<ChainProp<string>>;
export declare const PARAKEET_BRIDGE_ADDRESS: ChainProp<string>;
export declare const PROVIDERS: ChainProp<string>;

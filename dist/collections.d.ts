import { ChainId } from './constants';
export declare const WHITELISTED_COLLECTIONS: Record<string, {
    name: string;
    symbol: string;
    origin: number;
    contracts: {
        [chainId in ChainId]: string;
    };
}>;

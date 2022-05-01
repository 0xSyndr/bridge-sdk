import { ChainId } from '../constants';
export declare const bridge: ({ srcChainId, dstChainId, nftCollectionAddress, tokenId, provider, account, }: {
    srcChainId: ChainId;
    dstChainId: ChainId;
    nftCollectionAddress: string;
    tokenId: number;
    provider: any;
    account: string;
}) => Promise<any>;

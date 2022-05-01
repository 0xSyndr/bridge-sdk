import { ChainId } from '../constants';
export declare const approve: ({ srcChainId, nftCollectionAddress, tokenId, provider, account, }: {
    srcChainId: ChainId;
    nftCollectionAddress: string;
    tokenId: number;
    provider: any;
    account: string;
}) => Promise<any>;

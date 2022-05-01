import { ChainId } from '../constants';
export declare const estimateBridgeFees: ({ srcChainId, dstChainId, nftSrcContractAddress, tokenId, provider, account, }: {
    srcChainId: ChainId;
    dstChainId: ChainId;
    nftSrcContractAddress: string;
    tokenId: number;
    provider: any;
    account: string;
}) => Promise<any>;

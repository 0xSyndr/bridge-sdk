import { ChainId } from '../constants';
export declare const getDstChainAddress: ({ srcChainId, dstChainId, nftSrcContractAddress, }: {
    srcChainId: ChainId;
    dstChainId: ChainId;
    nftSrcContractAddress: string;
}) => string | undefined;

import { ChainId } from '../constants';
import { WHITELISTED_COLLECTIONS } from '../collections';

export const getDstChainAddress = ({
  srcChainId,
  dstChainId,
  nftSrcContractAddress,
}: {
  srcChainId: ChainId;
  dstChainId: ChainId;
  nftSrcContractAddress: string;
}) => {
  for (let nft of Object.keys(WHITELISTED_COLLECTIONS)) {
    if (
      WHITELISTED_COLLECTIONS[nft].contracts[srcChainId] ===
      nftSrcContractAddress
    ) {
      return WHITELISTED_COLLECTIONS[nft].contracts[dstChainId];
    }
  }
};

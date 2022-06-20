import { Web3Provider } from '@ethersproject/providers';
import BridgeContract from '../abi/Bridge.json';
import BridgedERC721 from '../abi/BridgedERC721.json';
import { ChainId, PARAKEET_BRIDGE_ADDRESS } from '../constants';
import { getContract } from '../utils';

export const approve = async ({
  srcChainId,
  nftCollectionAddress,
  tokenId,
  provider,
  account,
}) => {
  const _provider = new Web3Provider(provider);

  try {
    const bridge = await getContract(
      PARAKEET_BRIDGE_ADDRESS[srcChainId],
      BridgeContract.abi,
      _provider,
      account
    );

    const NFT = await getContract(
      nftCollectionAddress,
      BridgedERC721.abi,
      _provider,
      account
    );

    const checkApprovalAddress = await NFT.getApproved(tokenId);
    let approvalTx;

    if (!(checkApprovalAddress === bridge.address)) {
      const approvalAction = await NFT.approve(bridge.address, tokenId);

      approvalTx = await approvalAction.wait();
    } else {
    }

    return approvalTx;
  } catch (err) {
    throw err;
  }
};

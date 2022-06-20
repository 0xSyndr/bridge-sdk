import { AddressZero } from '@ethersproject/constants';
import { Web3Provider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import BridgeContract from '../abi/Bridge.json';
import {
  BRIDGE_FEES,
  ChainId,
  LAYERZERO_CHAINIDS,
  PARAKEET_BRIDGE_ADDRESS,
} from '../constants';
import { getContract } from '../utils';

export const bridge = async ({
  srcChainId,
  dstChainId,
  nftCollectionAddress,
  tokenId,
  provider,
  account,
}) => {
  const _provider = new Web3Provider(provider);
  const dstLayerZeroChainId = LAYERZERO_CHAINIDS[dstChainId];

  try {
    const bridge = await getContract(
      PARAKEET_BRIDGE_ADDRESS[srcChainId],
      BridgeContract,
      _provider,
      account
    );
    const bridgeAction = await bridge.transferToChain(
      dstLayerZeroChainId,
      nftCollectionAddress,
      tokenId,
      account,
      AddressZero,
      '0x',
      {
        value: ethers.utils.parseEther(BRIDGE_FEES[dstChainId][srcChainId]),
      }
    );

    const bridgeTx = await bridgeAction.wait();

    return bridgeTx;
  } catch (err) {
    throw err;
  }
};

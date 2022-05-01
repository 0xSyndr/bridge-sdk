import { JsonRpcProvider } from '@ethersproject/providers';
import { ethers } from 'ethers';
import LayerZeroEndpoint from '../abi/LayerZeroEndpoint.json';
import { LAYERZERO_CHAINIDS, LAYERZERO_ENDPOINTS, PARAKEET_BRIDGE_ADDRESS, CHAIN_MAPPABLE, PROVIDERS, } from '../constants';
import { formatEther, getContract, parseEther } from '.';
import { getDstChainAddress } from './address';
import { WHITELISTED_COLLECTIONS } from '../collections';
export const estimateBridgeFees = async ({ srcChainId, dstChainId, nftSrcContractAddress, tokenId, provider, account, }) => {
    const lzDstChainId = LAYERZERO_CHAINIDS[dstChainId];
    const bridgeAddr = PARAKEET_BRIDGE_ADDRESS[srcChainId];
    const abiCoder = ethers.utils.defaultAbiCoder;
    const endpointAddress = LAYERZERO_ENDPOINTS[srcChainId];
    const nftDstContractAddress = getDstChainAddress({
        srcChainId,
        dstChainId,
        nftSrcContractAddress,
    });
    try {
        const web3Provider = new JsonRpcProvider(provider);
        const lzEndpoint = await getContract(endpointAddress, LayerZeroEndpoint.abi, web3Provider);
        const payload = abiCoder.encode(['string', 'string', 'string', 'uint', 'uint'], [
            account,
            nftSrcContractAddress,
            nftDstContractAddress,
            tokenId,
            srcChainId,
        ]);
        const res = await lzEndpoint.estimateFees(lzDstChainId, bridgeAddr, payload, false, '0x');
        return res;
    }
    catch (err) {
        console.log(err);
    }
};
const generateBridgeFees = async () => {
    const bridgeFees = {};
    for (const [srcId, srcName] of CHAIN_MAPPABLE) {
        console.log(srcName +
            ' to -----------------------------------------------------------------------------------');
        bridgeFees[srcId] = {};
        for (const [dstId, dstName] of CHAIN_MAPPABLE) {
            let estimatedFee = await estimateBridgeFees({
                account: '0xABE883B4b0Ab134CD25C6201c31397b255D03075',
                srcChainId: srcId,
                dstChainId: dstId,
                nftSrcContractAddress: WHITELISTED_COLLECTIONS['MFNFT'].contracts[srcId],
                tokenId: 535668,
                provider: PROVIDERS[srcId],
            });
            bridgeFees[srcId][dstId] = formatEther(estimatedFee.nativeFee.mul(parseEther('1.1')).div(parseEther('1')));
            console.log(dstName, formatEther(estimatedFee.nativeFee.mul(parseEther('1.1')).div(parseEther('1'))), formatEther(estimatedFee.nativeFee));
        }
    }
    console.log(JSON.stringify(bridgeFees));
};
generateBridgeFees();

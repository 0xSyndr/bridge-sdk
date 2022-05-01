import { Contract } from '@ethersproject/contracts';
import { Web3Provider, JsonRpcProvider } from '@ethersproject/providers';
import { ethers } from 'ethers';
export declare function isAddress(value: any): string | false;
export declare function shortenAddress(address: string, chars?: number): string;
export declare function getContract(address: string, ABI: any, library: Web3Provider | JsonRpcProvider, account?: string): Contract;
export declare const toBN: (value: string) => ethers.BigNumber;
export declare const formatEther: (value: ethers.BigNumber) => string;
export declare const parseEther: (value: string) => ethers.BigNumber;

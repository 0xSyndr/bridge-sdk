# What is Parakeet SDK

Parakeet Bridge provides a key missing piece of infrastructure by helping users bridge their NFTs between multiple blockchains. <br />
With Parakeet bridge you can transfer your ERC721/ERC1155 tokens across multiple public blockchain networks in a secure, trustless & decentralized manner. <br />
You can read more about Parakeet DAO in [Official docs](https://docs.parakeetdao.com/overview/what-is-parakeet-dao) <br />
[NPM package](https://www.npmjs.com/package/@parakeet/sdk)

## Supported chains (Testnet)

| Testnet                  | Chain ID |
| ------------------------ | -------- |
| Rinkeby                  | 4        |
| BSC Testnet              | 97       |
| Arbitrum Rinkeby Testnet | 421611   |
| Mumbai (Polygon Testnet) | 80001    |
| Fantom Testnet           | 4002     |
| Fuji (Avalanche Testnet) | 43113    |
| Optimism Kovan Testnet   | 69       |

## Supported chains (Mainnet) >>> Coming Soon

| Mainnet             | Chain ID |
| ------------------- | -------- |
| Ethereum            | 1        |
| Binance Smart Chain | 56       |
| Arbitrum            | 42161    |
| Polygon             | 137      |
| Fantom              | 250      |
| Avalanche           | 43114    |
| Optimism            | 10       |

## How to install

```js
npm i @parakeet/sdk
```

## How to approve the bridge

1. Import approve function <br />

   ```js
   import { approve } from '@parakeet/sdk/bridge';
   ```

2. Use inside your project. All arguments are required <br />
   ```js
   await approve({
     srcChainId,
     nftCollectionAddress,
     tokenId,
     provider,
     account,
   });
   ```

### Arguments for approve

| Argument             |  Type   | Required | Description                                                       |
| -------------------- | :-----: | -------: | ----------------------------------------------------------------- |
| srcChainId           | Integer |     true | chain Id on the source chain -> chain on which the NFT is present |
| nftCollectionAddress | String  |     true | contract address of collection on the source chain                |
| tokenId              | String  |     true | specific token Id that you want to bridge                         |
| provider             | Object  |     true | Web3Provider                                                      |
| account              | String  |     true | account address                                                   |

## How to bridge the NFT

1. Import bridge function <br />

   ```js
   import { bridge } from '@parakeet/sdk/bridge';
   ```

2. Use inside your project. All arguments are required <br />
   ```js
   await bridge({
     srcChainId,
     dstChainId,
     nftCollectionAddress,
     tokenId,
     provider,
     account,
   });
   ```

### Arguments for bridge

| Argument             |  Type   | Required | Description                                                                 |
| -------------------- | :-----: | -------: | --------------------------------------------------------------------------- |
| srcChainId           | Integer |     true | chain Id on the source chain -> chain where the NFT is currently present    |
| dstChainId           | Integer |     true | chain Id of the destination chain -> chain where you want to bridge the NFT |
| nftCollectionAddress | String  |     true | contract address of collection on the source chain                          |
| tokenId              | String  |     true | specific token Id that you want to bridge                                   |
| provider             | Object  |     true | Web3Provider                                                                |
| account              | String  |     true | account address                                                             |

## How to estimate bridge fee

1. Import estimateBridgeFees function <br />

   ```js
   import { estimateBridgeFees } from '@parakeet/sdk/bridge';
   ```

2. Use inside your project. All arguments are required <br />
   ```js
   const estimatedFees = await estimateBridgeFees({
          account,
          dstChainId,
          srcChainId,
          provider,
          tokenId,
          nftSrcContractAddress
        });
   ```

### Arguments for estimateBridgeFees

| Argument             |  Type   | Required | Description                                                                 |
| -------------------- | :-----: | -------: | --------------------------------------------------------------------------- |
| srcChainId           | Integer |     true | chain Id on the source chain -> chain where the NFT is currently present    |
| dstChainId           | Integer |     true | chain Id of the destination chain -> chain where you want to bridge the NFT |
| nftSrcContractAddress | String  |     true | contract address of collection on the source chain                          |
| tokenId              | String  |     true | specific token Id that you want to bridge                                   |
| provider             | Object  |     true | Web3Provider                                                                |
| account              | String  |     true | account address                                                             |

## Example

### ReactJs Example using web3-react

```js
import { approve, bridge } from '@parakeet/sdk/bridge';
import { useWeb3React } from '@web3-react/core';

const useBridge = () => {
  const { account, library } = useWeb3React();

  //  rinkeby
  const srcChainId = 4;

  // optimism kovan
  const dstChainId = 69;

  // address of the NFT collection on the source chain -> on Rinekby(in this example)
  const nftCollectionAddress = '...';

  // token Id owned by account
  const tokenId = '...';

  //  provider
  let provider;
  // in case of ethers.js
  provider = library.provider;
  // in case of web3.js
  provider = library.currentProvider;

  const bridgeNFT = async () => {
    try {
      const approveTx = await approve(
        srcChainId,
        nftCollectionAddress,
        tokenId,
        provider,
        account
      );

      const bridgeTx = await bridge(
        srcChainId,
        dstChainId,
        nftCollectionAddress,
        tokenId,
        provider,
        account
      );
    } catch (err) {
      console.log(err);
    }
    return { approveTx, bridgeTx };
  };

  return { bridgeNFT };
};
```

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPendleMarket } from "../IPendleMarket";

export class IPendleMarket__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPendleMarket {
    return new Contract(address, _abi, signerOrProvider) as IPendleMarket;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weight0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "reserve1",
        type: "uint256",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_desiredXytAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_desiredTokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_xytMinAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_tokenMinAmount",
        type: "uint256",
      },
    ],
    name: "addMarketLiquidityDual",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
      {
        internalType: "uint256",
        name: "lpOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutLp",
        type: "uint256",
      },
    ],
    name: "addMarketLiquiditySingle",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
      {
        internalType: "uint256",
        name: "exactOutLp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialXytLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialTokenLiquidity",
        type: "uint256",
      },
    ],
    name: "bootstrap",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
      {
        internalType: "uint256",
        name: "exactOutLp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factoryId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint256",
        name: "xytBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "xytWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBlock",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "redeemLpInterests",
    outputs: [
      {
        internalType: "uint256",
        name: "interests",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inLp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutXyt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutToken",
        type: "uint256",
      },
    ],
    name: "removeMarketLiquidityDual",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactInLp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minOutToken",
        type: "uint256",
      },
    ],
    name: "removeMarketLiquiditySingle",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "setUpEmergencyMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minOutAmount",
        type: "uint256",
      },
    ],
    name: "swapExactIn",
    outputs: [
      {
        internalType: "uint256",
        name: "outAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "inToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxInAmount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "outToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "outAmount",
        type: "uint256",
      },
    ],
    name: "swapExactOut",
    outputs: [
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOut",
            type: "bool",
          },
        ],
        internalType: "struct PendingTransfer[2]",
        name: "transfers",
        type: "tuple[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xyt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
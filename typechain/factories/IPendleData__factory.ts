/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPendleData } from "../IPendleData";

export class IPendleData__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPendleData {
    return new Contract(address, _abi, signerOrProvider) as IPendleData;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_blockDelta",
        type: "uint256",
      },
    ],
    name: "CurveShiftBlockDeltaSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "expiryDivisor",
        type: "uint256",
      },
    ],
    name: "ExpiryDivisorSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "forgeAddress",
        type: "address",
      },
    ],
    name: "ForgeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "_forgeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_marketFactoryId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "_valid",
        type: "bool",
      },
    ],
    name: "ForgeFactoryValiditySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "forgeFee",
        type: "uint256",
      },
    ],
    name: "ForgeFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "interestUpdateRateDeltaForMarket",
        type: "uint256",
      },
    ],
    name: "InterestUpdateRateDeltaForMarketSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lockNumerator",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockDenominator",
        type: "uint256",
      },
    ],
    name: "LockParamsSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_swapFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_protocolSwapFee",
        type: "uint256",
      },
    ],
    name: "MarketFeesSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "xyt",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "MarketPairAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "marketFactoryId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "marketFactoryAddress",
        type: "address",
      },
    ],
    name: "NewMarketFactory",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "treasury",
        type: "address",
      },
    ],
    name: "TreasurySet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "forgeAddress",
        type: "address",
      },
    ],
    name: "addForge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "marketFactoryId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "xyt",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    name: "addMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "marketFactoryId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "marketFactoryAddress",
        type: "address",
      },
    ],
    name: "addMarketFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allMarketsLength",
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
    inputs: [],
    name: "curveShiftBlockDelta",
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
    inputs: [],
    name: "expiryDivisor",
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
    inputs: [],
    name: "forgeFee",
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
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
    ],
    name: "getForgeAddress",
    outputs: [
      {
        internalType: "address",
        name: "forgeAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "marketFactoryId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "xyt",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "getMarket",
    outputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getMarketByIndex",
    outputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "marketFactoryId",
        type: "bytes32",
      },
    ],
    name: "getMarketFactoryAddress",
    outputs: [
      {
        internalType: "address",
        name: "marketFactoryAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "xyt",
        type: "address",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "marketFactoryId",
        type: "bytes32",
      },
    ],
    name: "getMarketFromKey",
    outputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "underlyingYieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "getPendleYieldTokens",
    outputs: [
      {
        internalType: "contract IPendleYieldToken",
        name: "ot",
        type: "address",
      },
      {
        internalType: "contract IPendleYieldToken",
        name: "xyt",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interestUpdateRateDeltaForMarket",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "isMarket",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "isValidOT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "isValidXYT",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isXyt",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockDenominator",
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
    inputs: [],
    name: "lockNumerator",
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
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "underlyingYieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "otTokens",
    outputs: [
      {
        internalType: "contract IPendleYieldToken",
        name: "ot",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pausingManager",
    outputs: [
      {
        internalType: "contract IPendlePausingManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolSwapFee",
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
    inputs: [],
    name: "router",
    outputs: [
      {
        internalType: "contract IPendleRouter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_blockDelta",
        type: "uint256",
      },
    ],
    name: "setCurveShiftBlockDelta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_expiryDivisor",
        type: "uint256",
      },
    ],
    name: "setExpiryDivisor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_forgeId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_marketFactoryId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "_valid",
        type: "bool",
      },
    ],
    name: "setForgeFactoryValidity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_forgeFee",
        type: "uint256",
      },
    ],
    name: "setForgeFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_interestUpdateRateDeltaForMarket",
        type: "uint256",
      },
    ],
    name: "setInterestUpdateRateDeltaForMarket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_lockNumerator",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_lockDenominator",
        type: "uint256",
      },
    ],
    name: "setLockParams",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_swapFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_protocolSwapFee",
        type: "uint256",
      },
    ],
    name: "setMarketFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newTreasury",
        type: "address",
      },
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "ot",
        type: "address",
      },
      {
        internalType: "address",
        name: "xyt",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "storeTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "swapFee",
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
    inputs: [],
    name: "treasury",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_forgeId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_marketFactoryId",
        type: "bytes32",
      },
    ],
    name: "validForgeFactoryPair",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "forgeId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
    ],
    name: "xytTokens",
    outputs: [
      {
        internalType: "contract IPendleYieldToken",
        name: "xyt",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
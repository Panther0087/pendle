/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IPendleMarketFactory } from "../IPendleMarketFactory";

export class IPendleMarketFactory__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPendleMarketFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPendleMarketFactory;
  }
}

const _abi = [
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
    ],
    name: "createMarket",
    outputs: [
      {
        internalType: "address",
        name: "market",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "marketFactoryId",
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
];

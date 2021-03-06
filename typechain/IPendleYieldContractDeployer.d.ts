/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IPendleYieldContractDeployerInterface extends ethers.utils.Interface {
  functions: {
    "deployYieldTokenHolder(address,uint256)": FunctionFragment;
    "forgeFutureYieldToken(address,string,string,uint8,uint256)": FunctionFragment;
    "forgeId()": FunctionFragment;
    "forgeOwnershipToken(address,string,string,uint8,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deployYieldTokenHolder",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forgeFutureYieldToken",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "forgeId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "forgeOwnershipToken",
    values: [string, string, string, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "deployYieldTokenHolder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forgeFutureYieldToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forgeId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forgeOwnershipToken",
    data: BytesLike
  ): Result;

  events: {};
}

export class IPendleYieldContractDeployer extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IPendleYieldContractDeployerInterface;

  functions: {
    deployYieldTokenHolder(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deployYieldTokenHolder(address,uint256)"(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forgeFutureYieldToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "forgeFutureYieldToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forgeId(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "forgeId()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forgeOwnershipToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "forgeOwnershipToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  deployYieldTokenHolder(
    yieldToken: string,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deployYieldTokenHolder(address,uint256)"(
    yieldToken: string,
    expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forgeFutureYieldToken(
    _underlyingAsset: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "forgeFutureYieldToken(address,string,string,uint8,uint256)"(
    _underlyingAsset: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forgeId(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "forgeId()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forgeOwnershipToken(
    _underlyingAsset: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "forgeOwnershipToken(address,string,string,uint8,uint256)"(
    _underlyingAsset: string,
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    deployYieldTokenHolder(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "deployYieldTokenHolder(address,uint256)"(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    forgeFutureYieldToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "forgeFutureYieldToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    forgeId(overrides?: CallOverrides): Promise<string>;

    "forgeId()"(overrides?: CallOverrides): Promise<string>;

    forgeOwnershipToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "forgeOwnershipToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    deployYieldTokenHolder(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deployYieldTokenHolder(address,uint256)"(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forgeFutureYieldToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "forgeFutureYieldToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forgeId(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "forgeId()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forgeOwnershipToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "forgeOwnershipToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deployYieldTokenHolder(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deployYieldTokenHolder(address,uint256)"(
      yieldToken: string,
      expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forgeFutureYieldToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "forgeFutureYieldToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forgeId(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "forgeId()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forgeOwnershipToken(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "forgeOwnershipToken(address,string,string,uint8,uint256)"(
      _underlyingAsset: string,
      _name: string,
      _symbol: string,
      _decimals: BigNumberish,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

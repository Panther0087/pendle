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

interface IPendleYieldTokenCommonInterface extends ethers.utils.Interface {
  functions: {
    "burn(address,uint256)": FunctionFragment;
    "forge()": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "underlyingAsset()": FunctionFragment;
    "underlyingYieldToken()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "forge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingYieldToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "underlyingAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingYieldToken",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,uint256)": EventFragment;
    "Mint(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}

export class IPendleYieldTokenCommon extends Contract {
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

  interface: IPendleYieldTokenCommonInterface;

  functions: {
    burn(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "burn(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    forge(overrides?: CallOverrides): Promise<[string]>;

    "forge()"(overrides?: CallOverrides): Promise<[string]>;

    mint(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "mint(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    underlyingAsset(overrides?: CallOverrides): Promise<[string]>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<[string]>;

    underlyingYieldToken(overrides?: CallOverrides): Promise<[string]>;

    "underlyingYieldToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  burn(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "burn(address,uint256)"(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  forge(overrides?: CallOverrides): Promise<string>;

  "forge()"(overrides?: CallOverrides): Promise<string>;

  mint(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "mint(address,uint256)"(
    user: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  underlyingAsset(overrides?: CallOverrides): Promise<string>;

  "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;

  underlyingYieldToken(overrides?: CallOverrides): Promise<string>;

  "underlyingYieldToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    burn(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    forge(overrides?: CallOverrides): Promise<string>;

    "forge()"(overrides?: CallOverrides): Promise<string>;

    mint(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "mint(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingAsset(overrides?: CallOverrides): Promise<string>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;

    underlyingYieldToken(overrides?: CallOverrides): Promise<string>;

    "underlyingYieldToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    Burn(
      user: string | null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;

    Mint(
      user: string | null,
      amount: null
    ): TypedEventFilter<
      [string, BigNumber],
      { user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    burn(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "burn(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    forge(overrides?: CallOverrides): Promise<BigNumber>;

    "forge()"(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "mint(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    underlyingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingYieldToken(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingYieldToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    forge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "forge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(
      user: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    underlyingAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "underlyingAsset()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    underlyingYieldToken(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "underlyingYieldToken()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
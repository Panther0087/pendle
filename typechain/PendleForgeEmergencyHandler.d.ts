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

interface PendleForgeEmergencyHandlerInterface extends ethers.utils.Interface {
  functions: {
    "data()": FunctionFragment;
    "forgeData(address,address,uint256)": FunctionFragment;
    "governanceManager()": FunctionFragment;
    "setUpEmergencyMode(address,address,uint256)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "data", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "forgeData",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "governanceManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setUpEmergencyMode",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forgeData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUpEmergencyMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export class PendleForgeEmergencyHandler extends Contract {
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

  interface: PendleForgeEmergencyHandlerInterface;

  functions: {
    data(overrides?: CallOverrides): Promise<[string]>;

    "data()"(overrides?: CallOverrides): Promise<[string]>;

    forgeData(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber] & {
        yieldTokenHolder: string;
        yieldToken: string;
        rewardToken: string;
        ot: string;
        totalOt: BigNumber;
      }
    >;

    "forgeData(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber] & {
        yieldTokenHolder: string;
        yieldToken: string;
        rewardToken: string;
        ot: string;
        totalOt: BigNumber;
      }
    >;

    governanceManager(overrides?: CallOverrides): Promise<[string]>;

    "governanceManager()"(overrides?: CallOverrides): Promise<[string]>;

    setUpEmergencyMode(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUpEmergencyMode(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  data(overrides?: CallOverrides): Promise<string>;

  "data()"(overrides?: CallOverrides): Promise<string>;

  forgeData(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber] & {
      yieldTokenHolder: string;
      yieldToken: string;
      rewardToken: string;
      ot: string;
      totalOt: BigNumber;
    }
  >;

  "forgeData(address,address,uint256)"(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, string, BigNumber] & {
      yieldTokenHolder: string;
      yieldToken: string;
      rewardToken: string;
      ot: string;
      totalOt: BigNumber;
    }
  >;

  governanceManager(overrides?: CallOverrides): Promise<string>;

  "governanceManager()"(overrides?: CallOverrides): Promise<string>;

  setUpEmergencyMode(
    _forgeAddr: string,
    _underlyingAsset: string,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUpEmergencyMode(address,address,uint256)"(
    _forgeAddr: string,
    _underlyingAsset: string,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    _forgeAddr: string,
    _underlyingAsset: string,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(address,address,uint256)"(
    _forgeAddr: string,
    _underlyingAsset: string,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    data(overrides?: CallOverrides): Promise<string>;

    "data()"(overrides?: CallOverrides): Promise<string>;

    forgeData(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber] & {
        yieldTokenHolder: string;
        yieldToken: string;
        rewardToken: string;
        ot: string;
        totalOt: BigNumber;
      }
    >;

    "forgeData(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, string, BigNumber] & {
        yieldTokenHolder: string;
        yieldToken: string;
        rewardToken: string;
        ot: string;
        totalOt: BigNumber;
      }
    >;

    governanceManager(overrides?: CallOverrides): Promise<string>;

    "governanceManager()"(overrides?: CallOverrides): Promise<string>;

    setUpEmergencyMode(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUpEmergencyMode(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    data(overrides?: CallOverrides): Promise<BigNumber>;

    "data()"(overrides?: CallOverrides): Promise<BigNumber>;

    forgeData(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "forgeData(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governanceManager(overrides?: CallOverrides): Promise<BigNumber>;

    "governanceManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    setUpEmergencyMode(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUpEmergencyMode(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    data(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "data()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forgeData(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "forgeData(address,address,uint256)"(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governanceManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governanceManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUpEmergencyMode(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUpEmergencyMode(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address,uint256)"(
      _forgeAddr: string,
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

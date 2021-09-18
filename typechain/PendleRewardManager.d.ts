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

interface PendleRewardManagerInterface extends ethers.utils.Interface {
  functions: {
    "forgeId()": FunctionFragment;
    "governanceManager()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "readRewardData(address,uint256,address)": FunctionFragment;
    "redeemRewards(address,uint256,address)": FunctionFragment;
    "setSkippingRewards(bool)": FunctionFragment;
    "setUpdateFrequency(address[],uint256[])": FunctionFragment;
    "skippingRewards()": FunctionFragment;
    "updateParamLManual(address,uint256)": FunctionFragment;
    "updatePendingRewards(address,uint256,address)": FunctionFragment;
    "withdrawEther(uint256,address)": FunctionFragment;
    "withdrawToken(address,uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "forgeId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governanceManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "readRewardData",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemRewards",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setSkippingRewards",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setUpdateFrequency",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "skippingRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateParamLManual",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePendingRewards",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEther",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "forgeId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "readRewardData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSkippingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUpdateFrequency",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "skippingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateParamLManual",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePendingRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawToken",
    data: BytesLike
  ): Result;

  events: {
    "DueRewardsSettled(bytes32,address,uint256,uint256,address)": EventFragment;
    "EtherWithdraw(uint256,address)": EventFragment;
    "SkippingRewardsSet(bool)": EventFragment;
    "TokenWithdraw(address,uint256,address)": EventFragment;
    "UpdateFrequencySet(address[],uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DueRewardsSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EtherWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SkippingRewardsSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateFrequencySet"): EventFragment;
}

export class PendleRewardManager extends Contract {
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

  interface: PendleRewardManagerInterface;

  functions: {
    forgeId(overrides?: CallOverrides): Promise<[string]>;

    "forgeId()"(overrides?: CallOverrides): Promise<[string]>;

    governanceManager(overrides?: CallOverrides): Promise<[string]>;

    "governanceManager()"(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      _forgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _forgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    readRewardData(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        paramL: BigNumber;
        lastRewardBalance: BigNumber;
        lastParamL: BigNumber;
        dueRewards: BigNumber;
      }
    >;

    "readRewardData(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        paramL: BigNumber;
        lastRewardBalance: BigNumber;
        lastParamL: BigNumber;
        dueRewards: BigNumber;
      }
    >;

    redeemRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setSkippingRewards(
      _skippingRewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setSkippingRewards(bool)"(
      _skippingRewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUpdateFrequency(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUpdateFrequency(address[],uint256[])"(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    skippingRewards(overrides?: CallOverrides): Promise<[boolean]>;

    "skippingRewards()"(overrides?: CallOverrides): Promise<[boolean]>;

    updateParamLManual(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updateParamLManual(address,uint256)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatePendingRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "updatePendingRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawEther(
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawEther(uint256,address)"(
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdrawToken(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  forgeId(overrides?: CallOverrides): Promise<string>;

  "forgeId()"(overrides?: CallOverrides): Promise<string>;

  governanceManager(overrides?: CallOverrides): Promise<string>;

  "governanceManager()"(overrides?: CallOverrides): Promise<string>;

  initialize(
    _forgeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _forgeAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  readRewardData(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      paramL: BigNumber;
      lastRewardBalance: BigNumber;
      lastParamL: BigNumber;
      dueRewards: BigNumber;
    }
  >;

  "readRewardData(address,uint256,address)"(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      paramL: BigNumber;
      lastRewardBalance: BigNumber;
      lastParamL: BigNumber;
      dueRewards: BigNumber;
    }
  >;

  redeemRewards(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemRewards(address,uint256,address)"(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setSkippingRewards(
    _skippingRewards: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setSkippingRewards(bool)"(
    _skippingRewards: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUpdateFrequency(
    underlyingAssets: string[],
    frequencies: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUpdateFrequency(address[],uint256[])"(
    underlyingAssets: string[],
    frequencies: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  skippingRewards(overrides?: CallOverrides): Promise<boolean>;

  "skippingRewards()"(overrides?: CallOverrides): Promise<boolean>;

  updateParamLManual(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updateParamLManual(address,uint256)"(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatePendingRewards(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "updatePendingRewards(address,uint256,address)"(
    _underlyingAsset: string,
    _expiry: BigNumberish,
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawEther(
    amount: BigNumberish,
    sendTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawEther(uint256,address)"(
    amount: BigNumberish,
    sendTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawToken(
    token: string,
    amount: BigNumberish,
    sendTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdrawToken(address,uint256,address)"(
    token: string,
    amount: BigNumberish,
    sendTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    forgeId(overrides?: CallOverrides): Promise<string>;

    "forgeId()"(overrides?: CallOverrides): Promise<string>;

    governanceManager(overrides?: CallOverrides): Promise<string>;

    "governanceManager()"(overrides?: CallOverrides): Promise<string>;

    initialize(_forgeAddress: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _forgeAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    readRewardData(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        paramL: BigNumber;
        lastRewardBalance: BigNumber;
        lastParamL: BigNumber;
        dueRewards: BigNumber;
      }
    >;

    "readRewardData(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        paramL: BigNumber;
        lastRewardBalance: BigNumber;
        lastParamL: BigNumber;
        dueRewards: BigNumber;
      }
    >;

    redeemRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setSkippingRewards(
      _skippingRewards: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSkippingRewards(bool)"(
      _skippingRewards: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setUpdateFrequency(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "setUpdateFrequency(address[],uint256[])"(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    skippingRewards(overrides?: CallOverrides): Promise<boolean>;

    "skippingRewards()"(overrides?: CallOverrides): Promise<boolean>;

    updateParamLManual(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "updateParamLManual(address,uint256)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePendingRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "updatePendingRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawEther(
      amount: BigNumberish,
      sendTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawEther(uint256,address)"(
      amount: BigNumberish,
      sendTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdrawToken(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    DueRewardsSettled(
      forgeId: null,
      underlyingAsset: null,
      expiry: null,
      amountOut: null,
      user: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber, string],
      {
        forgeId: string;
        underlyingAsset: string;
        expiry: BigNumber;
        amountOut: BigNumber;
        user: string;
      }
    >;

    EtherWithdraw(
      amount: null,
      sendTo: null
    ): TypedEventFilter<
      [BigNumber, string],
      { amount: BigNumber; sendTo: string }
    >;

    SkippingRewardsSet(
      undefined: null
    ): TypedEventFilter<[boolean], { arg0: boolean }>;

    TokenWithdraw(
      token: null,
      amount: null,
      sendTo: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { token: string; amount: BigNumber; sendTo: string }
    >;

    UpdateFrequencySet(
      undefined: null,
      undefined: null
    ): TypedEventFilter<
      [string[], BigNumber[]],
      { arg0: string[]; arg1: BigNumber[] }
    >;
  };

  estimateGas: {
    forgeId(overrides?: CallOverrides): Promise<BigNumber>;

    "forgeId()"(overrides?: CallOverrides): Promise<BigNumber>;

    governanceManager(overrides?: CallOverrides): Promise<BigNumber>;

    "governanceManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _forgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address)"(
      _forgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    readRewardData(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readRewardData(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setSkippingRewards(
      _skippingRewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setSkippingRewards(bool)"(
      _skippingRewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUpdateFrequency(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUpdateFrequency(address[],uint256[])"(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    skippingRewards(overrides?: CallOverrides): Promise<BigNumber>;

    "skippingRewards()"(overrides?: CallOverrides): Promise<BigNumber>;

    updateParamLManual(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updateParamLManual(address,uint256)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatePendingRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "updatePendingRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawEther(
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawEther(uint256,address)"(
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdrawToken(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    forgeId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "forgeId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governanceManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _forgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _forgeAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    readRewardData(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readRewardData(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeemRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setSkippingRewards(
      _skippingRewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setSkippingRewards(bool)"(
      _skippingRewards: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUpdateFrequency(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUpdateFrequency(address[],uint256[])"(
      underlyingAssets: string[],
      frequencies: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    skippingRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "skippingRewards()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateParamLManual(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updateParamLManual(address,uint256)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatePendingRewards(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "updatePendingRewards(address,uint256,address)"(
      _underlyingAsset: string,
      _expiry: BigNumberish,
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawEther(
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawEther(uint256,address)"(
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawToken(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdrawToken(address,uint256,address)"(
      token: string,
      amount: BigNumberish,
      sendTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

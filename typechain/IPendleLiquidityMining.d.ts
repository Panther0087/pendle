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

interface IPendleLiquidityMiningInterface extends ethers.utils.Interface {
  functions: {
    "baseToken()": FunctionFragment;
    "epochDuration()": FunctionFragment;
    "forge()": FunctionFragment;
    "forgeId()": FunctionFragment;
    "fund(uint256[])": FunctionFragment;
    "getBalances(uint256,address)": FunctionFragment;
    "lpHolderForExpiry(uint256)": FunctionFragment;
    "marketFactoryId()": FunctionFragment;
    "numberOfEpochs()": FunctionFragment;
    "pendleTokenAddress()": FunctionFragment;
    "readAllExpiriesLength()": FunctionFragment;
    "readUserExpiries(address)": FunctionFragment;
    "redeemLpInterests(uint256,address)": FunctionFragment;
    "redeemRewards(uint256,address)": FunctionFragment;
    "setUpEmergencyMode(uint256[],address)": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakeWithPermit(uint256,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
    "startTime()": FunctionFragment;
    "topUpRewards(uint256[],uint256[])": FunctionFragment;
    "totalRewardsForEpoch(uint256)": FunctionFragment;
    "underlyingAsset()": FunctionFragment;
    "underlyingYieldToken()": FunctionFragment;
    "vestingEpochs()": FunctionFragment;
    "withdraw(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "baseToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "epochDuration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "forge", values?: undefined): string;
  encodeFunctionData(functionFragment: "forgeId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fund",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalances",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "lpHolderForExpiry",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "marketFactoryId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendleTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "readAllExpiriesLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "readUserExpiries",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemLpInterests",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemRewards",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setUpEmergencyMode",
    values: [BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stakeWithPermit",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "topUpRewards",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "totalRewardsForEpoch",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingYieldToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingEpochs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "baseToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "epochDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "forge", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forgeId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fund", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lpHolderForExpiry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "marketFactoryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendleTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readAllExpiriesLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readUserExpiries",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemLpInterests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUpEmergencyMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stakeWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "topUpRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRewardsForEpoch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingYieldToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingEpochs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "AllocationSettingSet(uint256[],uint256[])": EventFragment;
    "Funded(uint256[],uint256)": EventFragment;
    "PendleRewardsSettled(uint256,address,uint256)": EventFragment;
    "RewardsToppedUp(uint256[],uint256[])": EventFragment;
    "Staked(uint256,address,uint256)": EventFragment;
    "Withdrawn(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AllocationSettingSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Funded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendleRewardsSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardsToppedUp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class IPendleLiquidityMining extends Contract {
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

  interface: IPendleLiquidityMiningInterface;

  functions: {
    baseToken(overrides?: CallOverrides): Promise<[string]>;

    "baseToken()"(overrides?: CallOverrides): Promise<[string]>;

    epochDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    "epochDuration()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    forge(overrides?: CallOverrides): Promise<[string]>;

    "forge()"(overrides?: CallOverrides): Promise<[string]>;

    forgeId(overrides?: CallOverrides): Promise<[string]>;

    "forgeId()"(overrides?: CallOverrides): Promise<[string]>;

    fund(
      rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "fund(uint256[])"(
      rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBalances(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getBalances(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    lpHolderForExpiry(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "lpHolderForExpiry(uint256)"(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    marketFactoryId(overrides?: CallOverrides): Promise<[string]>;

    "marketFactoryId()"(overrides?: CallOverrides): Promise<[string]>;

    numberOfEpochs(overrides?: CallOverrides): Promise<[BigNumber]>;

    "numberOfEpochs()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    pendleTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    "pendleTokenAddress()"(overrides?: CallOverrides): Promise<[string]>;

    readAllExpiriesLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    "readAllExpiriesLength()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    readUserExpiries(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { expiries: BigNumber[] }>;

    "readUserExpiries(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { expiries: BigNumber[] }>;

    redeemLpInterests(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemLpInterests(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemRewards(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemRewards(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setUpEmergencyMode(
      expiries: BigNumberish[],
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUpEmergencyMode(uint256[],address)"(
      expiries: BigNumberish[],
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stake(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "stake(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stakeWithPermit(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "stakeWithPermit(uint256,uint256,uint256,uint8,bytes32,bytes32)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    topUpRewards(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "topUpRewards(uint256[],uint256[])"(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    totalRewardsForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalRewardsForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    underlyingAsset(overrides?: CallOverrides): Promise<[string]>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<[string]>;

    underlyingYieldToken(overrides?: CallOverrides): Promise<[string]>;

    "underlyingYieldToken()"(overrides?: CallOverrides): Promise<[string]>;

    vestingEpochs(overrides?: CallOverrides): Promise<[BigNumber]>;

    "vestingEpochs()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdraw(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "withdraw(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  baseToken(overrides?: CallOverrides): Promise<string>;

  "baseToken()"(overrides?: CallOverrides): Promise<string>;

  epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

  "epochDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

  forge(overrides?: CallOverrides): Promise<string>;

  "forge()"(overrides?: CallOverrides): Promise<string>;

  forgeId(overrides?: CallOverrides): Promise<string>;

  "forgeId()"(overrides?: CallOverrides): Promise<string>;

  fund(
    rewards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "fund(uint256[])"(
    rewards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBalances(
    expiry: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getBalances(uint256,address)"(
    expiry: BigNumberish,
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  lpHolderForExpiry(
    expiry: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "lpHolderForExpiry(uint256)"(
    expiry: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  marketFactoryId(overrides?: CallOverrides): Promise<string>;

  "marketFactoryId()"(overrides?: CallOverrides): Promise<string>;

  numberOfEpochs(overrides?: CallOverrides): Promise<BigNumber>;

  "numberOfEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

  pendleTokenAddress(overrides?: CallOverrides): Promise<string>;

  "pendleTokenAddress()"(overrides?: CallOverrides): Promise<string>;

  readAllExpiriesLength(overrides?: CallOverrides): Promise<BigNumber>;

  "readAllExpiriesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

  readUserExpiries(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "readUserExpiries(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  redeemLpInterests(
    expiry: BigNumberish,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemLpInterests(uint256,address)"(
    expiry: BigNumberish,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemRewards(
    expiry: BigNumberish,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemRewards(uint256,address)"(
    expiry: BigNumberish,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setUpEmergencyMode(
    expiries: BigNumberish[],
    spender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUpEmergencyMode(uint256[],address)"(
    expiries: BigNumberish[],
    spender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stake(
    expiry: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "stake(uint256,uint256)"(
    expiry: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stakeWithPermit(
    expiry: BigNumberish,
    amount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "stakeWithPermit(uint256,uint256,uint256,uint8,bytes32,bytes32)"(
    expiry: BigNumberish,
    amount: BigNumberish,
    deadline: BigNumberish,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  topUpRewards(
    _epochIds: BigNumberish[],
    _rewards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "topUpRewards(uint256[],uint256[])"(
    _epochIds: BigNumberish[],
    _rewards: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  totalRewardsForEpoch(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalRewardsForEpoch(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  underlyingAsset(overrides?: CallOverrides): Promise<string>;

  "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;

  underlyingYieldToken(overrides?: CallOverrides): Promise<string>;

  "underlyingYieldToken()"(overrides?: CallOverrides): Promise<string>;

  vestingEpochs(overrides?: CallOverrides): Promise<BigNumber>;

  "vestingEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

  withdraw(
    expiry: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "withdraw(uint256,uint256)"(
    expiry: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    baseToken(overrides?: CallOverrides): Promise<string>;

    "baseToken()"(overrides?: CallOverrides): Promise<string>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    "epochDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

    forge(overrides?: CallOverrides): Promise<string>;

    "forge()"(overrides?: CallOverrides): Promise<string>;

    forgeId(overrides?: CallOverrides): Promise<string>;

    "forgeId()"(overrides?: CallOverrides): Promise<string>;

    fund(rewards: BigNumberish[], overrides?: CallOverrides): Promise<void>;

    "fund(uint256[])"(
      rewards: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    getBalances(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalances(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lpHolderForExpiry(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "lpHolderForExpiry(uint256)"(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    marketFactoryId(overrides?: CallOverrides): Promise<string>;

    "marketFactoryId()"(overrides?: CallOverrides): Promise<string>;

    numberOfEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    "numberOfEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendleTokenAddress(overrides?: CallOverrides): Promise<string>;

    "pendleTokenAddress()"(overrides?: CallOverrides): Promise<string>;

    readAllExpiriesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "readAllExpiriesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    readUserExpiries(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "readUserExpiries(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    redeemLpInterests(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemLpInterests(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemRewards(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "redeemRewards(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setUpEmergencyMode(
      expiries: BigNumberish[],
      spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUpEmergencyMode(uint256[],address)"(
      expiries: BigNumberish[],
      spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stake(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "stake(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    stakeWithPermit(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "stakeWithPermit(uint256,uint256,uint256,uint8,bytes32,bytes32)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    topUpRewards(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    "topUpRewards(uint256[],uint256[])"(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    totalRewardsForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalRewardsForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingAsset(overrides?: CallOverrides): Promise<string>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<string>;

    underlyingYieldToken(overrides?: CallOverrides): Promise<string>;

    "underlyingYieldToken()"(overrides?: CallOverrides): Promise<string>;

    vestingEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    "vestingEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AllocationSettingSet(
      _expiries: null,
      _allocationNumerators: null
    ): TypedEventFilter<
      [BigNumber[], BigNumber[]],
      { _expiries: BigNumber[]; _allocationNumerators: BigNumber[] }
    >;

    Funded(
      _rewards: null,
      numberOfEpochs: null
    ): TypedEventFilter<
      [BigNumber[], BigNumber],
      { _rewards: BigNumber[]; numberOfEpochs: BigNumber }
    >;

    PendleRewardsSettled(
      expiry: null,
      user: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { expiry: BigNumber; user: string; amount: BigNumber }
    >;

    RewardsToppedUp(
      _epochIds: null,
      _rewards: null
    ): TypedEventFilter<
      [BigNumber[], BigNumber[]],
      { _epochIds: BigNumber[]; _rewards: BigNumber[] }
    >;

    Staked(
      expiry: null,
      user: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { expiry: BigNumber; user: string; amount: BigNumber }
    >;

    Withdrawn(
      expiry: null,
      user: null,
      amount: null
    ): TypedEventFilter<
      [BigNumber, string, BigNumber],
      { expiry: BigNumber; user: string; amount: BigNumber }
    >;
  };

  estimateGas: {
    baseToken(overrides?: CallOverrides): Promise<BigNumber>;

    "baseToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    epochDuration(overrides?: CallOverrides): Promise<BigNumber>;

    "epochDuration()"(overrides?: CallOverrides): Promise<BigNumber>;

    forge(overrides?: CallOverrides): Promise<BigNumber>;

    "forge()"(overrides?: CallOverrides): Promise<BigNumber>;

    forgeId(overrides?: CallOverrides): Promise<BigNumber>;

    "forgeId()"(overrides?: CallOverrides): Promise<BigNumber>;

    fund(
      rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "fund(uint256[])"(
      rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBalances(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getBalances(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lpHolderForExpiry(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "lpHolderForExpiry(uint256)"(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketFactoryId(overrides?: CallOverrides): Promise<BigNumber>;

    "marketFactoryId()"(overrides?: CallOverrides): Promise<BigNumber>;

    numberOfEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    "numberOfEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendleTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "pendleTokenAddress()"(overrides?: CallOverrides): Promise<BigNumber>;

    readAllExpiriesLength(overrides?: CallOverrides): Promise<BigNumber>;

    "readAllExpiriesLength()"(overrides?: CallOverrides): Promise<BigNumber>;

    readUserExpiries(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "readUserExpiries(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    redeemLpInterests(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemLpInterests(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemRewards(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemRewards(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setUpEmergencyMode(
      expiries: BigNumberish[],
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUpEmergencyMode(uint256[],address)"(
      expiries: BigNumberish[],
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stake(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "stake(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stakeWithPermit(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "stakeWithPermit(uint256,uint256,uint256,uint8,bytes32,bytes32)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    topUpRewards(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "topUpRewards(uint256[],uint256[])"(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    totalRewardsForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalRewardsForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    underlyingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingAsset()"(overrides?: CallOverrides): Promise<BigNumber>;

    underlyingYieldToken(overrides?: CallOverrides): Promise<BigNumber>;

    "underlyingYieldToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    vestingEpochs(overrides?: CallOverrides): Promise<BigNumber>;

    "vestingEpochs()"(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "withdraw(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    baseToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "baseToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    epochDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "epochDuration()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "forge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forgeId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "forgeId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fund(
      rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "fund(uint256[])"(
      rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBalances(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getBalances(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lpHolderForExpiry(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "lpHolderForExpiry(uint256)"(
      expiry: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    marketFactoryId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "marketFactoryId()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfEpochs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "numberOfEpochs()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendleTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendleTokenAddress()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readAllExpiriesLength(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readAllExpiriesLength()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readUserExpiries(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "readUserExpiries(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeemLpInterests(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemLpInterests(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemRewards(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemRewards(uint256,address)"(
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setUpEmergencyMode(
      expiries: BigNumberish[],
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUpEmergencyMode(uint256[],address)"(
      expiries: BigNumberish[],
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "stake(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stakeWithPermit(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "stakeWithPermit(uint256,uint256,uint256,uint8,bytes32,bytes32)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      deadline: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    topUpRewards(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "topUpRewards(uint256[],uint256[])"(
      _epochIds: BigNumberish[],
      _rewards: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    totalRewardsForEpoch(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalRewardsForEpoch(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
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

    vestingEpochs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vestingEpochs()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "withdraw(uint256,uint256)"(
      expiry: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

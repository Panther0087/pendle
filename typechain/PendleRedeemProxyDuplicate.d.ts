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

interface PendleRedeemProxyDuplicateInterface extends ethers.utils.Interface {
  functions: {
    "redeem(address[],address[],address[],uint256[],uint256)": FunctionFragment;
    "redeemLiqMining(address[],uint256[],uint256)": FunctionFragment;
    "redeemMarkets(address[])": FunctionFragment;
    "redeemXyts(address[])": FunctionFragment;
    "router()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "redeem",
    values: [string[], string[], string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemLiqMining",
    values: [string[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemMarkets",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemXyts",
    values: [string[]]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;

  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "redeemLiqMining",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemMarkets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeemXyts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;

  events: {};
}

export class PendleRedeemProxyDuplicate extends Contract {
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

  interface: PendleRedeemProxyDuplicateInterface;

  functions: {
    redeem(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeem(address[],address[],address[],uint256[],uint256)"(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemLiqMining(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemLiqMining(address[],uint256[],uint256)"(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemMarkets(
      markets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemMarkets(address[])"(
      markets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemXyts(
      xyts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemXyts(address[])"(
      xyts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    router(overrides?: CallOverrides): Promise<[string]>;

    "router()"(overrides?: CallOverrides): Promise<[string]>;
  };

  redeem(
    _xyts: string[],
    _markets: string[],
    _liqMiningContracts: string[],
    _expiries: BigNumberish[],
    _liqMiningRewardsCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeem(address[],address[],address[],uint256[],uint256)"(
    _xyts: string[],
    _markets: string[],
    _liqMiningContracts: string[],
    _expiries: BigNumberish[],
    _liqMiningRewardsCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemLiqMining(
    liqMiningContracts: string[],
    expiries: BigNumberish[],
    liqMiningRewardsCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemLiqMining(address[],uint256[],uint256)"(
    liqMiningContracts: string[],
    expiries: BigNumberish[],
    liqMiningRewardsCount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemMarkets(
    markets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemMarkets(address[])"(
    markets: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemXyts(
    xyts: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemXyts(address[])"(
    xyts: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  router(overrides?: CallOverrides): Promise<string>;

  "router()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    redeem(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        xytInterests: BigNumber[];
        marketInterests: BigNumber[];
        rewards: BigNumber[];
        liqMiningInterests: BigNumber[];
      }
    >;

    "redeem(address[],address[],address[],uint256[],uint256)"(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber[], BigNumber[]] & {
        xytInterests: BigNumber[];
        marketInterests: BigNumber[];
        rewards: BigNumber[];
        liqMiningInterests: BigNumber[];
      }
    >;

    redeemLiqMining(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        rewards: BigNumber[];
        liqMiningInterests: BigNumber[];
      }
    >;

    "redeemLiqMining(address[],uint256[],uint256)"(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        rewards: BigNumber[];
        liqMiningInterests: BigNumber[];
      }
    >;

    redeemMarkets(
      markets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "redeemMarkets(address[])"(
      markets: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    redeemXyts(xyts: string[], overrides?: CallOverrides): Promise<BigNumber[]>;

    "redeemXyts(address[])"(
      xyts: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    router(overrides?: CallOverrides): Promise<string>;

    "router()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    redeem(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeem(address[],address[],address[],uint256[],uint256)"(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemLiqMining(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemLiqMining(address[],uint256[],uint256)"(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemMarkets(
      markets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemMarkets(address[])"(
      markets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemXyts(
      xyts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemXyts(address[])"(
      xyts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    router(overrides?: CallOverrides): Promise<BigNumber>;

    "router()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    redeem(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeem(address[],address[],address[],uint256[],uint256)"(
      _xyts: string[],
      _markets: string[],
      _liqMiningContracts: string[],
      _expiries: BigNumberish[],
      _liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemLiqMining(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemLiqMining(address[],uint256[],uint256)"(
      liqMiningContracts: string[],
      expiries: BigNumberish[],
      liqMiningRewardsCount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemMarkets(
      markets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemMarkets(address[])"(
      markets: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemXyts(
      xyts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemXyts(address[])"(
      xyts: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "router()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

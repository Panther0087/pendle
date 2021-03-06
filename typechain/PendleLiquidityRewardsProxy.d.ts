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

interface PendleLiquidityRewardsProxyInterface extends ethers.utils.Interface {
  functions: {
    "redeemAndCalculateAccruing(address,uint256,address)": FunctionFragment;
    "redeemAndCalculateAccruingV2(address,address)": FunctionFragment;
    "redeemAndCalculateVested(address,uint256[],address)": FunctionFragment;
    "redeemAndCalculateVestedV2(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "redeemAndCalculateAccruing",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAndCalculateAccruingV2",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAndCalculateVested",
    values: [string, BigNumberish[], string]
  ): string;
  encodeFunctionData(
    functionFragment: "redeemAndCalculateVestedV2",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "redeemAndCalculateAccruing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemAndCalculateAccruingV2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemAndCalculateVested",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemAndCalculateVestedV2",
    data: BytesLike
  ): Result;

  events: {};
}

export class PendleLiquidityRewardsProxy extends Contract {
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

  interface: PendleLiquidityRewardsProxyInterface;

  functions: {
    redeemAndCalculateAccruing(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemAndCalculateAccruing(address,uint256,address)"(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAndCalculateAccruingV2(
      liqMiningV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemAndCalculateAccruingV2(address,address)"(
      liqMiningV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAndCalculateVested(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemAndCalculateVested(address,uint256[],address)"(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    redeemAndCalculateVestedV2(
      liqMiningContractV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemAndCalculateVestedV2(address,address)"(
      liqMiningContractV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  redeemAndCalculateAccruing(
    liqMining: string,
    expiry: BigNumberish,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemAndCalculateAccruing(address,uint256,address)"(
    liqMining: string,
    expiry: BigNumberish,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAndCalculateAccruingV2(
    liqMiningV2: string,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemAndCalculateAccruingV2(address,address)"(
    liqMiningV2: string,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAndCalculateVested(
    liqMiningContract: string,
    expiries: BigNumberish[],
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemAndCalculateVested(address,uint256[],address)"(
    liqMiningContract: string,
    expiries: BigNumberish[],
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  redeemAndCalculateVestedV2(
    liqMiningContractV2: string,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemAndCalculateVestedV2(address,address)"(
    liqMiningContractV2: string,
    user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    redeemAndCalculateAccruing(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        userStakeUnits: BigNumber;
        userStake: BigNumber;
        totalStakeUnits: BigNumber;
        totalStake: BigNumber;
        userTentativeReward: BigNumber;
      }
    >;

    "redeemAndCalculateAccruing(address,uint256,address)"(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        userStakeUnits: BigNumber;
        userStake: BigNumber;
        totalStakeUnits: BigNumber;
        totalStake: BigNumber;
        userTentativeReward: BigNumber;
      }
    >;

    redeemAndCalculateAccruingV2(
      liqMiningV2: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        userStakeUnits: BigNumber;
        userStake: BigNumber;
        totalStakeUnits: BigNumber;
        totalStake: BigNumber;
        userTentativeReward: BigNumber;
      }
    >;

    "redeemAndCalculateAccruingV2(address,address)"(
      liqMiningV2: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        userStakeUnits: BigNumber;
        userStake: BigNumber;
        totalStakeUnits: BigNumber;
        totalStake: BigNumber;
        userTentativeReward: BigNumber;
      }
    >;

    redeemAndCalculateVested(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber] & {
        rewards: BigNumber;
        vestedRewards: BigNumber[];
        currentEpoch: BigNumber;
      }
    >;

    "redeemAndCalculateVested(address,uint256[],address)"(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber] & {
        rewards: BigNumber;
        vestedRewards: BigNumber[];
        currentEpoch: BigNumber;
      }
    >;

    redeemAndCalculateVestedV2(
      liqMiningContractV2: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber] & {
        rewards: BigNumber;
        vestedRewards: BigNumber[];
        currentEpoch: BigNumber;
      }
    >;

    "redeemAndCalculateVestedV2(address,address)"(
      liqMiningContractV2: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[], BigNumber] & {
        rewards: BigNumber;
        vestedRewards: BigNumber[];
        currentEpoch: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    redeemAndCalculateAccruing(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemAndCalculateAccruing(address,uint256,address)"(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAndCalculateAccruingV2(
      liqMiningV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemAndCalculateAccruingV2(address,address)"(
      liqMiningV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAndCalculateVested(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemAndCalculateVested(address,uint256[],address)"(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    redeemAndCalculateVestedV2(
      liqMiningContractV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemAndCalculateVestedV2(address,address)"(
      liqMiningContractV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    redeemAndCalculateAccruing(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemAndCalculateAccruing(address,uint256,address)"(
      liqMining: string,
      expiry: BigNumberish,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAndCalculateAccruingV2(
      liqMiningV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemAndCalculateAccruingV2(address,address)"(
      liqMiningV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAndCalculateVested(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemAndCalculateVested(address,uint256[],address)"(
      liqMiningContract: string,
      expiries: BigNumberish[],
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    redeemAndCalculateVestedV2(
      liqMiningContractV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemAndCalculateVestedV2(address,address)"(
      liqMiningContractV2: string,
      user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

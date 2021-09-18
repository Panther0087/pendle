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

interface IAaveV2LendingPoolInterface extends ethers.utils.Interface {
  functions: {
    "deposit(address,uint256,address,uint16)": FunctionFragment;
    "getReserveData(address)": FunctionFragment;
    "getReserveNormalizedIncome(address)": FunctionFragment;
    "getUserAccountData(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReserveNormalizedIncome",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserAccountData",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReserveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReserveNormalizedIncome",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserAccountData",
    data: BytesLike
  ): Result;

  events: {};
}

export class IAaveV2LendingPool extends Contract {
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

  interface: IAaveV2LendingPoolInterface;

  functions: {
    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "deposit(address,uint256,address,uint16)"(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          [BigNumber] & { data: BigNumber },
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number,
          string,
          string,
          string,
          string,
          number
        ] & {
          configuration: [BigNumber] & { data: BigNumber };
          liquidityIndex: BigNumber;
          variableBorrowIndex: BigNumber;
          currentLiquidityRate: BigNumber;
          currentVariableBorrowRate: BigNumber;
          currentStableBorrowRate: BigNumber;
          lastUpdateTimestamp: number;
          aTokenAddress: string;
          stableDebtTokenAddress: string;
          variableDebtTokenAddress: string;
          interestRateStrategyAddress: string;
          id: number;
        }
      ]
    >;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [
          [BigNumber] & { data: BigNumber },
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          BigNumber,
          number,
          string,
          string,
          string,
          string,
          number
        ] & {
          configuration: [BigNumber] & { data: BigNumber };
          liquidityIndex: BigNumber;
          variableBorrowIndex: BigNumber;
          currentLiquidityRate: BigNumber;
          currentVariableBorrowRate: BigNumber;
          currentStableBorrowRate: BigNumber;
          lastUpdateTimestamp: number;
          aTokenAddress: string;
          stableDebtTokenAddress: string;
          variableDebtTokenAddress: string;
          interestRateStrategyAddress: string;
          id: number;
        }
      ]
    >;

    getReserveNormalizedIncome(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getReserveNormalizedIncome(address)"(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    "getUserAccountData(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;
  };

  deposit(
    asset: string,
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "deposit(address,uint256,address,uint16)"(
    asset: string,
    amount: BigNumberish,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getReserveData(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber] & { data: BigNumber },
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      string,
      string,
      string,
      string,
      number
    ] & {
      configuration: [BigNumber] & { data: BigNumber };
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      currentLiquidityRate: BigNumber;
      currentVariableBorrowRate: BigNumber;
      currentStableBorrowRate: BigNumber;
      lastUpdateTimestamp: number;
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      interestRateStrategyAddress: string;
      id: number;
    }
  >;

  "getReserveData(address)"(
    asset: string,
    overrides?: CallOverrides
  ): Promise<
    [
      [BigNumber] & { data: BigNumber },
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      string,
      string,
      string,
      string,
      number
    ] & {
      configuration: [BigNumber] & { data: BigNumber };
      liquidityIndex: BigNumber;
      variableBorrowIndex: BigNumber;
      currentLiquidityRate: BigNumber;
      currentVariableBorrowRate: BigNumber;
      currentStableBorrowRate: BigNumber;
      lastUpdateTimestamp: number;
      aTokenAddress: string;
      stableDebtTokenAddress: string;
      variableDebtTokenAddress: string;
      interestRateStrategyAddress: string;
      id: number;
    }
  >;

  getReserveNormalizedIncome(
    underlyingAsset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getReserveNormalizedIncome(address)"(
    underlyingAsset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUserAccountData(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalCollateralETH: BigNumber;
      totalDebtETH: BigNumber;
      availableBorrowsETH: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
    }
  >;

  "getUserAccountData(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      totalCollateralETH: BigNumber;
      totalDebtETH: BigNumber;
      availableBorrowsETH: BigNumber;
      currentLiquidationThreshold: BigNumber;
      ltv: BigNumber;
      healthFactor: BigNumber;
    }
  >;

  callStatic: {
    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,uint256,address,uint16)"(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber] & { data: BigNumber },
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        number
      ] & {
        configuration: [BigNumber] & { data: BigNumber };
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        id: number;
      }
    >;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber] & { data: BigNumber },
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        string,
        string,
        string,
        string,
        number
      ] & {
        configuration: [BigNumber] & { data: BigNumber };
        liquidityIndex: BigNumber;
        variableBorrowIndex: BigNumber;
        currentLiquidityRate: BigNumber;
        currentVariableBorrowRate: BigNumber;
        currentStableBorrowRate: BigNumber;
        lastUpdateTimestamp: number;
        aTokenAddress: string;
        stableDebtTokenAddress: string;
        variableDebtTokenAddress: string;
        interestRateStrategyAddress: string;
        id: number;
      }
    >;

    getReserveNormalizedIncome(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveNormalizedIncome(address)"(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;

    "getUserAccountData(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
        totalCollateralETH: BigNumber;
        totalDebtETH: BigNumber;
        availableBorrowsETH: BigNumber;
        currentLiquidationThreshold: BigNumber;
        ltv: BigNumber;
        healthFactor: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "deposit(address,uint256,address,uint16)"(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReserveNormalizedIncome(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getReserveNormalizedIncome(address)"(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUserAccountData(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    deposit(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "deposit(address,uint256,address,uint16)"(
      asset: string,
      amount: BigNumberish,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getReserveData(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveData(address)"(
      asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReserveNormalizedIncome(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getReserveNormalizedIncome(address)"(
      underlyingAsset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserAccountData(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUserAccountData(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
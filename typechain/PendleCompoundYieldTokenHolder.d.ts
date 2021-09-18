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

interface PendleCompoundYieldTokenHolderInterface
  extends ethers.utils.Interface {
  functions: {
    "expiry()": FunctionFragment;
    "forge()": FunctionFragment;
    "governanceManager()": FunctionFragment;
    "redeemRewards()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setUpEmergencyMode(address)": FunctionFragment;
    "withdrawEther(uint256,address)": FunctionFragment;
    "withdrawToken(address,uint256,address)": FunctionFragment;
    "yieldToken()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "expiry", values?: undefined): string;
  encodeFunctionData(functionFragment: "forge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "governanceManager",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "redeemRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setUpEmergencyMode",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEther",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawToken",
    values: [string, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "yieldToken",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "expiry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "forge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "governanceManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "redeemRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setUpEmergencyMode",
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
  decodeFunctionResult(functionFragment: "yieldToken", data: BytesLike): Result;

  events: {
    "EtherWithdraw(uint256,address)": EventFragment;
    "TokenWithdraw(address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EtherWithdraw"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenWithdraw"): EventFragment;
}

export class PendleCompoundYieldTokenHolder extends Contract {
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

  interface: PendleCompoundYieldTokenHolderInterface;

  functions: {
    expiry(overrides?: CallOverrides): Promise<[BigNumber]>;

    "expiry()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    forge(overrides?: CallOverrides): Promise<[string]>;

    "forge()"(overrides?: CallOverrides): Promise<[string]>;

    governanceManager(overrides?: CallOverrides): Promise<[string]>;

    "governanceManager()"(overrides?: CallOverrides): Promise<[string]>;

    redeemRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "redeemRewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

    setUpEmergencyMode(
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setUpEmergencyMode(address)"(
      spender: string,
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

    yieldToken(overrides?: CallOverrides): Promise<[string]>;

    "yieldToken()"(overrides?: CallOverrides): Promise<[string]>;
  };

  expiry(overrides?: CallOverrides): Promise<BigNumber>;

  "expiry()"(overrides?: CallOverrides): Promise<BigNumber>;

  forge(overrides?: CallOverrides): Promise<string>;

  "forge()"(overrides?: CallOverrides): Promise<string>;

  governanceManager(overrides?: CallOverrides): Promise<string>;

  "governanceManager()"(overrides?: CallOverrides): Promise<string>;

  redeemRewards(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "redeemRewards()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  setUpEmergencyMode(
    spender: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setUpEmergencyMode(address)"(
    spender: string,
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

  yieldToken(overrides?: CallOverrides): Promise<string>;

  "yieldToken()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    expiry(overrides?: CallOverrides): Promise<BigNumber>;

    "expiry()"(overrides?: CallOverrides): Promise<BigNumber>;

    forge(overrides?: CallOverrides): Promise<string>;

    "forge()"(overrides?: CallOverrides): Promise<string>;

    governanceManager(overrides?: CallOverrides): Promise<string>;

    "governanceManager()"(overrides?: CallOverrides): Promise<string>;

    redeemRewards(overrides?: CallOverrides): Promise<void>;

    "redeemRewards()"(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    setUpEmergencyMode(
      spender: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setUpEmergencyMode(address)"(
      spender: string,
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

    yieldToken(overrides?: CallOverrides): Promise<string>;

    "yieldToken()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    EtherWithdraw(
      amount: null,
      sendTo: null
    ): TypedEventFilter<
      [BigNumber, string],
      { amount: BigNumber; sendTo: string }
    >;

    TokenWithdraw(
      token: null,
      amount: null,
      sendTo: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { token: string; amount: BigNumber; sendTo: string }
    >;
  };

  estimateGas: {
    expiry(overrides?: CallOverrides): Promise<BigNumber>;

    "expiry()"(overrides?: CallOverrides): Promise<BigNumber>;

    forge(overrides?: CallOverrides): Promise<BigNumber>;

    "forge()"(overrides?: CallOverrides): Promise<BigNumber>;

    governanceManager(overrides?: CallOverrides): Promise<BigNumber>;

    "governanceManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    redeemRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "redeemRewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setUpEmergencyMode(
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setUpEmergencyMode(address)"(
      spender: string,
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

    yieldToken(overrides?: CallOverrides): Promise<BigNumber>;

    "yieldToken()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    expiry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "expiry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    forge(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "forge()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    governanceManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "governanceManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeemRewards(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "redeemRewards()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setUpEmergencyMode(
      spender: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setUpEmergencyMode(address)"(
      spender: string,
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

    yieldToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "yieldToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

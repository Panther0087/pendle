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

interface IPENDLEInterface extends ethers.utils.Interface {
  functions: {
    "allowance(address,address)": FunctionFragment;
    "applyConfigChanges()": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "claimLiquidityEmissions()": FunctionFragment;
    "configChangesInitiated()": FunctionFragment;
    "decreaseAllowance(address,uint256)": FunctionFragment;
    "emissionRateMultiplierNumerator()": FunctionFragment;
    "getPriorVotes(address,uint256)": FunctionFragment;
    "increaseAllowance(address,uint256)": FunctionFragment;
    "initiateConfigChanges(uint256,uint256,address,bool)": FunctionFragment;
    "isBurningAllowed()": FunctionFragment;
    "isPendleToken()": FunctionFragment;
    "liquidityIncentivesRecipient()": FunctionFragment;
    "pendingEmissionRateMultiplierNumerator()": FunctionFragment;
    "pendingIsBurningAllowed()": FunctionFragment;
    "pendingLiquidityIncentivesRecipient()": FunctionFragment;
    "pendingTerminalInflationRateNumerator()": FunctionFragment;
    "startTime()": FunctionFragment;
    "terminalInflationRateNumerator()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "applyConfigChanges",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "claimLiquidityEmissions",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "configChangesInitiated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emissionRateMultiplierNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPriorVotes",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initiateConfigChanges",
    values: [BigNumberish, BigNumberish, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "isBurningAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPendleToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "liquidityIncentivesRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingEmissionRateMultiplierNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingIsBurningAllowed",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingLiquidityIncentivesRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTerminalInflationRateNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "startTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "terminalInflationRateNumerator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "applyConfigChanges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimLiquidityEmissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "configChangesInitiated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emissionRateMultiplierNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriorVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initiateConfigChanges",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isBurningAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPendleToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "liquidityIncentivesRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingEmissionRateMultiplierNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingIsBurningAllowed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingLiquidityIncentivesRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTerminalInflationRateNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "startTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "terminalInflationRateNumerator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class IPENDLE extends Contract {
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

  interface: IPENDLEInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    applyConfigChanges(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "applyConfigChanges()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimLiquidityEmissions(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "claimLiquidityEmissions()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    configChangesInitiated(overrides?: CallOverrides): Promise<[BigNumber]>;

    "configChangesInitiated()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "emissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPriorVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getPriorVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initiateConfigChanges(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initiateConfigChanges(uint256,uint256,address,bool)"(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isBurningAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    "isBurningAllowed()"(overrides?: CallOverrides): Promise<[boolean]>;

    isPendleToken(overrides?: CallOverrides): Promise<[boolean]>;

    "isPendleToken()"(overrides?: CallOverrides): Promise<[boolean]>;

    liquidityIncentivesRecipient(overrides?: CallOverrides): Promise<[string]>;

    "liquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    pendingEmissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingEmissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    pendingIsBurningAllowed(overrides?: CallOverrides): Promise<[boolean]>;

    "pendingIsBurningAllowed()"(overrides?: CallOverrides): Promise<[boolean]>;

    pendingLiquidityIncentivesRecipient(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "pendingLiquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    pendingTerminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "pendingTerminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    startTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    terminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "terminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalSupply()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "allowance(address,address)"(
    owner: string,
    spender: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  applyConfigChanges(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "applyConfigChanges()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "approve(address,uint256)"(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  burn(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "burn(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimLiquidityEmissions(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "claimLiquidityEmissions()"(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  configChangesInitiated(overrides?: CallOverrides): Promise<BigNumber>;

  "configChangesInitiated()"(overrides?: CallOverrides): Promise<BigNumber>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "decreaseAllowance(address,uint256)"(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emissionRateMultiplierNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "emissionRateMultiplierNumerator()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPriorVotes(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getPriorVotes(address,uint256)"(
    account: string,
    blockNumber: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "increaseAllowance(address,uint256)"(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initiateConfigChanges(
    _emissionRateMultiplierNumerator: BigNumberish,
    _terminalInflationRateNumerator: BigNumberish,
    _liquidityIncentivesRecipient: string,
    _isBurningAllowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initiateConfigChanges(uint256,uint256,address,bool)"(
    _emissionRateMultiplierNumerator: BigNumberish,
    _terminalInflationRateNumerator: BigNumberish,
    _liquidityIncentivesRecipient: string,
    _isBurningAllowed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isBurningAllowed(overrides?: CallOverrides): Promise<boolean>;

  "isBurningAllowed()"(overrides?: CallOverrides): Promise<boolean>;

  isPendleToken(overrides?: CallOverrides): Promise<boolean>;

  "isPendleToken()"(overrides?: CallOverrides): Promise<boolean>;

  liquidityIncentivesRecipient(overrides?: CallOverrides): Promise<string>;

  "liquidityIncentivesRecipient()"(overrides?: CallOverrides): Promise<string>;

  pendingEmissionRateMultiplierNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingEmissionRateMultiplierNumerator()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  pendingIsBurningAllowed(overrides?: CallOverrides): Promise<boolean>;

  "pendingIsBurningAllowed()"(overrides?: CallOverrides): Promise<boolean>;

  pendingLiquidityIncentivesRecipient(
    overrides?: CallOverrides
  ): Promise<string>;

  "pendingLiquidityIncentivesRecipient()"(
    overrides?: CallOverrides
  ): Promise<string>;

  pendingTerminalInflationRateNumerator(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "pendingTerminalInflationRateNumerator()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  startTime(overrides?: CallOverrides): Promise<BigNumber>;

  "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  terminalInflationRateNumerator(overrides?: CallOverrides): Promise<BigNumber>;

  "terminalInflationRateNumerator()"(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transfer(address,uint256)"(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    applyConfigChanges(overrides?: CallOverrides): Promise<void>;

    "applyConfigChanges()"(overrides?: CallOverrides): Promise<void>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    claimLiquidityEmissions(overrides?: CallOverrides): Promise<BigNumber>;

    "claimLiquidityEmissions()"(overrides?: CallOverrides): Promise<BigNumber>;

    configChangesInitiated(overrides?: CallOverrides): Promise<BigNumber>;

    "configChangesInitiated()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    emissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "emissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriorVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    initiateConfigChanges(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "initiateConfigChanges(uint256,uint256,address,bool)"(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    isBurningAllowed(overrides?: CallOverrides): Promise<boolean>;

    "isBurningAllowed()"(overrides?: CallOverrides): Promise<boolean>;

    isPendleToken(overrides?: CallOverrides): Promise<boolean>;

    "isPendleToken()"(overrides?: CallOverrides): Promise<boolean>;

    liquidityIncentivesRecipient(overrides?: CallOverrides): Promise<string>;

    "liquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<string>;

    pendingEmissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingEmissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingIsBurningAllowed(overrides?: CallOverrides): Promise<boolean>;

    "pendingIsBurningAllowed()"(overrides?: CallOverrides): Promise<boolean>;

    pendingLiquidityIncentivesRecipient(
      overrides?: CallOverrides
    ): Promise<string>;

    "pendingLiquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<string>;

    pendingTerminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingTerminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    terminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "terminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Transfer(
      from: string | null,
      to: string | null,
      value: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    applyConfigChanges(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "applyConfigChanges()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimLiquidityEmissions(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "claimLiquidityEmissions()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    configChangesInitiated(overrides?: CallOverrides): Promise<BigNumber>;

    "configChangesInitiated()"(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "emissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriorVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPriorVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initiateConfigChanges(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initiateConfigChanges(uint256,uint256,address,bool)"(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isBurningAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    "isBurningAllowed()"(overrides?: CallOverrides): Promise<BigNumber>;

    isPendleToken(overrides?: CallOverrides): Promise<BigNumber>;

    "isPendleToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    liquidityIncentivesRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    "liquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingEmissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingEmissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingIsBurningAllowed(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingIsBurningAllowed()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingLiquidityIncentivesRecipient(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingLiquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingTerminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "pendingTerminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startTime(overrides?: CallOverrides): Promise<BigNumber>;

    "startTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    terminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "terminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "allowance(address,address)"(
      owner: string,
      spender: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    applyConfigChanges(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "applyConfigChanges()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address)"(
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "burn(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimLiquidityEmissions(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "claimLiquidityEmissions()"(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    configChangesInitiated(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "configChangesInitiated()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "decreaseAllowance(address,uint256)"(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "emissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriorVotes(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPriorVotes(address,uint256)"(
      account: string,
      blockNumber: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "increaseAllowance(address,uint256)"(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initiateConfigChanges(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initiateConfigChanges(uint256,uint256,address,bool)"(
      _emissionRateMultiplierNumerator: BigNumberish,
      _terminalInflationRateNumerator: BigNumberish,
      _liquidityIncentivesRecipient: string,
      _isBurningAllowed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isBurningAllowed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isBurningAllowed()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPendleToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isPendleToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    liquidityIncentivesRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "liquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingEmissionRateMultiplierNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingEmissionRateMultiplierNumerator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingIsBurningAllowed(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingIsBurningAllowed()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingLiquidityIncentivesRecipient(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingLiquidityIncentivesRecipient()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingTerminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingTerminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    terminalInflationRateNumerator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "terminalInflationRateNumerator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PendleWhitelist } from "../PendleWhitelist";

export class PendleWhitelist__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _governanceManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PendleWhitelist> {
    return super.deploy(
      _governanceManager,
      overrides || {}
    ) as Promise<PendleWhitelist>;
  }
  getDeployTransaction(
    _governanceManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_governanceManager, overrides || {});
  }
  attach(address: string): PendleWhitelist {
    return super.attach(address) as PendleWhitelist;
  }
  connect(signer: Signer): PendleWhitelist__factory {
    return super.connect(signer) as PendleWhitelist__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PendleWhitelist {
    return new Contract(address, _abi, signerOrProvider) as PendleWhitelist;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governanceManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "AddedToWhiteList",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "RemovedFromWhiteList",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWhitelist",
    outputs: [
      {
        internalType: "address[]",
        name: "list",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governanceManager",
    outputs: [
      {
        internalType: "contract PendleGovernanceManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_addresses",
        type: "address[]",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "whitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161096d38038061096d8339818101604052602081101561003357600080fd5b5051806001600160a01b038116610080576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b600080546001600160a01b031916331790556001600160601b031960609190911b166080525060805160601c6108a56100c86000398061059f52806105d852506108a56000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063548db1741461005c5780637f649783146100ce578063d01f63f51461013e578063d2e6d1c314610196578063d936547e146101ba575b600080fd5b6100cc6004803603602081101561007257600080fd5b81019060208101813564010000000081111561008d57600080fd5b82018360208201111561009f57600080fd5b803590602001918460208302840111640100000000831117156100c157600080fd5b5090925090506101f4565b005b6100cc600480360360208110156100e457600080fd5b8101906020810181356401000000008111156100ff57600080fd5b82018360208201111561011157600080fd5b8035906020019184602083028401116401000000008311171561013357600080fd5b50909250905061037d565b610146610502565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561018257818101518382015260200161016a565b505050509050019250505060405180910390f35b61019e61059d565b604080516001600160a01b039092168252519081900360200190f35b6101e0600480360360208110156101d057600080fd5b50356001600160a01b03166105c1565b604080519115158252519081900360200190f35b6101fc6105d4565b6001600160a01b0316336001600160a01b031614610253576040805162461bcd60e51b815260206004820152600f60248201526e4f4e4c595f474f5645524e414e434560881b604482015290519081900360640190fd5b60005b8181101561037857600083838381811061026c57fe5b905060200201356001600160a01b0316905060006001600160a01b0316816001600160a01b031614156102d5576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b6102e0600182610660565b610327576040805162461bcd60e51b81526020600482015260136024820152721393d517d5d2125511531254d5115117d65155606a1b604482015290519081900360640190fd5b61033260018261067c565b50604080516001600160a01b038316815290517f9354cd337eebad48c93d70f7321b188732c3061fa5c48fe32b8e6f9480c52fcc9181900360200190a150600101610256565b505050565b6103856105d4565b6001600160a01b0316336001600160a01b0316146103dc576040805162461bcd60e51b815260206004820152600f60248201526e4f4e4c595f474f5645524e414e434560881b604482015290519081900360640190fd5b60005b818110156103785760008383838181106103f557fe5b905060200201356001600160a01b0316905060006001600160a01b0316816001600160a01b0316141561045e576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b610469600182610660565b156104b1576040805162461bcd60e51b81526020600482015260136024820152721053149150511657d5d2125511531254d51151606a1b604482015290519081900360640190fd5b6104bc600182610691565b50604080516001600160a01b038316815290517f8a3be376fdc726be3f3cee8e59ba5698a268a9b59f69cdabcf06d2ec2c90658f9181900360200190a1506001016103df565b6060600061051060016106a6565b90508067ffffffffffffffff8111801561052957600080fd5b50604051908082528060200260200182016040528015610553578160200160208202803683370190505b50915060005b818110156105985761056c6001826106b1565b83828151811061057857fe5b6001600160a01b0390921660209283029190910190910152600101610559565b505090565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006105ce600183610660565b92915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b15801561062f57600080fd5b505afa158015610643573d6000803e3d6000fd5b505050506040513d602081101561065957600080fd5b5051905090565b6000610675836001600160a01b0384166106bd565b9392505050565b6000610675836001600160a01b0384166106d5565b6000610675836001600160a01b03841661079b565b60006105ce826107e5565b600061067583836107e9565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015610791578354600019808301919081019060009087908390811061070857fe5b906000526020600020015490508087600001848154811061072557fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061075557fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506105ce565b60009150506105ce565b60006107a783836106bd565b6107dd575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556105ce565b5060006105ce565b5490565b8154600090821061082b5760405162461bcd60e51b815260040180806020018281038252602281526020018061084e6022913960400191505060405180910390fd5b82600001828154811061083a57fe5b906000526020600020015490509291505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e6473a2646970667358221220b0f806ea723df08fbb7674fd04ca13b854f8ca72937388f7c19630a15441a9b764736f6c63430007060033";

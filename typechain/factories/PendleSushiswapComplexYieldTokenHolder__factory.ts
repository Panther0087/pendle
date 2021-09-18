/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PendleSushiswapComplexYieldTokenHolder } from "../PendleSushiswapComplexYieldTokenHolder";

export class PendleSushiswapComplexYieldTokenHolder__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _governanceManager: string,
    _forge: string,
    _yieldToken: string,
    _expiry: BigNumberish,
    _masterChef: string,
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PendleSushiswapComplexYieldTokenHolder> {
    return super.deploy(
      _governanceManager,
      _forge,
      _yieldToken,
      _expiry,
      _masterChef,
      _pid,
      overrides || {}
    ) as Promise<PendleSushiswapComplexYieldTokenHolder>;
  }
  getDeployTransaction(
    _governanceManager: string,
    _forge: string,
    _yieldToken: string,
    _expiry: BigNumberish,
    _masterChef: string,
    _pid: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _governanceManager,
      _forge,
      _yieldToken,
      _expiry,
      _masterChef,
      _pid,
      overrides || {}
    );
  }
  attach(address: string): PendleSushiswapComplexYieldTokenHolder {
    return super.attach(address) as PendleSushiswapComplexYieldTokenHolder;
  }
  connect(signer: Signer): PendleSushiswapComplexYieldTokenHolder__factory {
    return super.connect(
      signer
    ) as PendleSushiswapComplexYieldTokenHolder__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PendleSushiswapComplexYieldTokenHolder {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PendleSushiswapComplexYieldTokenHolder;
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
      {
        internalType: "address",
        name: "_forge",
        type: "address",
      },
      {
        internalType: "address",
        name: "_yieldToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_masterChef",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sendTo",
        type: "address",
      },
    ],
    name: "EtherWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sendTo",
        type: "address",
      },
    ],
    name: "TokenWithdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "afterReceiveTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "expiry",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "forge",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    inputs: [],
    name: "masterChef",
    outputs: [
      {
        internalType: "contract IMasterChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minNYieldAfterPush",
        type: "uint256",
      },
    ],
    name: "pushYieldTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "redeemRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "setUpEmergencyMode",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "bool",
        name: "useEmergencyWithdraw",
        type: "bool",
      },
    ],
    name: "setUpEmergencyModeV2",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "sendTo",
        type: "address",
      },
    ],
    name: "withdrawEther",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "sendTo",
        type: "address",
      },
    ],
    name: "withdrawToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "yieldToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001b8938038062001b8983398101604081905262000035916200069e565b85858585836001600160a01b03811662000085576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b60008054336001600160a01b031990911617815560609190911b6001600160601b0319166080526040805163f7c618c160e01b815290516001600160a01b0386169163f7c618c1916004808301926020929190829003018186803b158015620000ed57600080fd5b505afa15801562000102573d6000803e3d6000fd5b505050506040513d60208110156200011957600080fd5b5051604080516307a77c5360e11b815290519192506000916001600160a01b03871691630f4ef8a6916004808301926020929190829003018186803b1580156200016257600080fd5b505afa15801562000177573d6000803e3d6000fd5b505050506040513d60208110156200018e57600080fd5b5051606085811b6001600160601b031990811660a0529087901b1660c052600180546001600160a01b0319166001600160a01b0385169081179091556002859055909150620001ed908260001962000270602090811b62000b2017901c565b50505050506001600160a01b03831615159050620002285760405162461bcd60e51b81526004016200021f906200070c565b60405180910390fd5b606082901b6001600160601b03191660e052610100819052620002646001600160a01b0385168360001962000270602090811b62000b2017901c565b50505050505062000732565b801580620002fa575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015620002ca57600080fd5b505afa158015620002df573d6000803e3d6000fd5b505050506040513d6020811015620002f657600080fd5b5051155b620003375760405162461bcd60e51b815260040180806020018281038252603681526020018062001b536036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200038f9185916200039416565b505050565b6000620003f0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200045060201b62000c38179092919060201c565b8051909150156200038f578080602001905160208110156200041157600080fd5b50516200038f5760405162461bcd60e51b815260040180806020018281038252602a81526020018062001b29602a913960400191505060405180910390fd5b60606200046184846000856200046b565b90505b9392505050565b606082471015620004ae5760405162461bcd60e51b815260040180806020018281038252602681526020018062001b036026913960400191505060405180910390fd5b620004b985620005d2565b6200050b576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106200054b5780518252601f1990920191602091820191016200052a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114620005af576040519150601f19603f3d011682016040523d82523d6000602084013e620005b4565b606091505b509092509050620005c7828286620005dc565b979650505050505050565b803b15155b919050565b60608315620005ed57508162000464565b825115620005fe5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156200064a57818101518382015260200162000630565b50505050905090810190601f168015620006785780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b80516001600160a01b0381168114620005d757600080fd5b60008060008060008060c08789031215620006b7578182fd5b620006c28762000686565b9550620006d26020880162000686565b9450620006e26040880162000686565b935060608701519250620006f96080880162000686565b915060a087015190509295509295509295565b6020808252600c908201526b5a45524f5f4144445245535360a01b604082015260600190565b60805160601c60a05160601c60c05160601c60e05160601c6101005161132b620007d86000398061027a52806103195280610676528061076852806108445280610a945280610aef52508061024d52806102f0528061055b5280610649528061073b52806108175280610a675250806101d1528061057f52806105d052508061040352806105a352806107d15280610ce1525080610a285280610c55525061132b6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063ce56c4541161008c578063e184c9be11610066578063e184c9be14610199578063f0fc4ec1146101ae578063f1068454146101b6578063f7c618c1146101be576100ea565b8063ce56c4541461016b578063d02fba511461017e578063d2e6d1c314610191576100ea565b80636c6f4239116100c85780636c6f42391461013557806376d5de851461013d57806391680e5f146101455780639cabec7b14610158576100ea565b806303b7acaf146100ef5780633ccdbb2814610104578063575a86b214610117575b600080fd5b6101026100fd3660046110b6565b6101c6565b005b610102610112366004611126565b610449565b61011f610559565b60405161012c91906111eb565b60405180910390f35b61011f61057d565b61011f6105a1565b6101026101533660046110f2565b6105c5565b6101026101663660046111af565b610800565b6101026101793660046111c7565b6108a3565b61010261018c36600461109a565b6109e2565b61011f610a26565b6101a1610a4a565b60405161012c9190611229565b610102610a50565b6101a1610aed565b61011f610b11565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610230576040805162461bcd60e51b815260206004820152600a6024820152694f4e4c595f464f52474560b01b604482015290519081900360640190fd5b80156102d957604051632989754760e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690635312ea8e906102a2907f000000000000000000000000000000000000000000000000000000000000000090600401611229565b600060405180830381600087803b1580156102bc57600080fd5b505af11580156102d0573d6000803e3d6000fd5b505050506103f6565b6040516393f1a40b60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063441a3e70907f00000000000000000000000000000000000000000000000000000000000000009083906393f1a40b906103519084903090600401611232565b604080518083038186803b15801561036857600080fd5b505afa15801561037c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a09190611167565b516040516001600160e01b031960e085901b1681526103c3929190600401611249565b600060405180830381600087803b1580156103dd57600080fd5b505af11580156103f1573d6000803e3d6000fd5b505050505b61042c6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001683600019610b20565b600154610445906001600160a01b031683600019610b20565b5050565b610451610c51565b6001600160a01b0316336001600160a01b0316146104a8576040805162461bcd60e51b815260206004820152600f60248201526e4f4e4c595f474f5645524e414e434560881b604482015290519081900360640190fd5b6104b183610cdd565b6104f6576040805162461bcd60e51b81526020600482015260116024820152701513d2d15397d393d517d0531313d5d151607a1b604482015290519081900360640190fd5b61050a6001600160a01b0384168284610d35565b604080516001600160a01b0380861682526020820185905283168183015290517f72cb8a894ddb372ceec3d2a7648d86f17d5a15caae0e986c53109b8a9a9385e69181900360600190a1505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461062f576040805162461bcd60e51b815260206004820152600a6024820152694f4e4c595f464f52474560b01b604482015290519081900360640190fd5b6040516393f1a40b60e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906393f1a40b906106a0907f0000000000000000000000000000000000000000000000000000000000000000903090600401611232565b604080518083038186803b1580156106b757600080fd5b505afa1580156106cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ef9190611167565b519050816106fd8285610d87565b10156107245760405162461bcd60e51b815260040161071b906111ff565b60405180910390fd5b604051630441a3e760e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063441a3e7090610792907f0000000000000000000000000000000000000000000000000000000000000000908790600401611249565b600060405180830381600087803b1580156107ac57600080fd5b505af11580156107c0573d6000803e3d6000fd5b506107fa9250506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690508585610d35565b50505050565b604051631c57762b60e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e2bbb1589061086e907f0000000000000000000000000000000000000000000000000000000000000000908590600401611249565b600060405180830381600087803b15801561088857600080fd5b505af115801561089c573d6000803e3d6000fd5b5050505050565b6108ab610c51565b6001600160a01b0316336001600160a01b031614610902576040805162461bcd60e51b815260206004820152600f60248201526e4f4e4c595f474f5645524e414e434560881b604482015290519081900360640190fd5b6040516000906001600160a01b0383169084908381818185875af1925050503d806000811461094d576040519150601f19603f3d011682016040523d82523d6000602084013e610952565b606091505b505090508061099a576040805162461bcd60e51b815260206004820152600f60248201526e15d2551211149055d7d19052531151608a1b604482015290519081900360640190fd5b604080518481526001600160a01b038416602082015281517fec47e7ed86c86774d1a72c19f35c639911393fe7c1a34031fdbd260890da90de929181900390910190a1505050565b6040805162461bcd60e51b815260206004820152601460248201527311955390d51253d397d11154149150d25055115160621b604482015290519081900360640190fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b60025481565b604051630441a3e760e41b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063441a3e7090610abf907f000000000000000000000000000000000000000000000000000000000000000090600090600401611249565b600060405180830381600087803b158015610ad957600080fd5b505af11580156107fa573d6000803e3d6000fd5b7f000000000000000000000000000000000000000000000000000000000000000081565b6001546001600160a01b031681565b801580610ba6575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b158015610b7857600080fd5b505afa158015610b8c573d6000803e3d6000fd5b505050506040513d6020811015610ba257600080fd5b5051155b610be15760405162461bcd60e51b81526004018080602001828103825260368152602001806112c06036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052610c33908490610de4565b505050565b6060610c478484600085610e95565b90505b9392505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610cac57600080fd5b505afa158015610cc0573d6000803e3d6000fd5b505050506040513d6020811015610cd657600080fd5b5051905090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316826001600160a01b031614158015610d2f57506001546001600160a01b03838116911614155b92915050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610c33908490610de4565b600082821115610dde576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000610e39826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610c389092919063ffffffff16565b805190915015610c3357808060200190516020811015610e5857600080fd5b5051610c335760405162461bcd60e51b815260040180806020018281038252602a815260200180611296602a913960400191505060405180910390fd5b606082471015610ed65760405162461bcd60e51b81526004018080602001828103825260268152602001806112706026913960400191505060405180910390fd5b610edf85610ff0565b610f30576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310610f6e5780518252601f199092019160209182019101610f4f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610fd0576040519150601f19603f3d011682016040523d82523d6000602084013e610fd5565b606091505b5091509150610fe5828286610ff6565b979650505050505050565b3b151590565b60608315611005575081610c4a565b8251156110155782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561105f578181015183820152602001611047565b50505050905090810190601f16801561108c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b6000602082840312156110ab578081fd5b8135610c4a81611257565b600080604083850312156110c8578081fd5b82356110d381611257565b9150602083013580151581146110e7578182fd5b809150509250929050565b600080600060608486031215611106578081fd5b833561111181611257565b95602085013595506040909401359392505050565b60008060006060848603121561113a578283fd5b833561114581611257565b925060208401359150604084013561115c81611257565b809150509250925092565b600060408284031215611178578081fd5b6040516040810181811067ffffffffffffffff8211171561119557fe5b604052825181526020928301519281019290925250919050565b6000602082840312156111c0578081fd5b5035919050565b600080604083850312156111d9578182fd5b8235915060208301356110e781611257565b6001600160a01b0391909116815260200190565b60208082526010908201526f24a72b20a924a0a721a2afa2a92927a960811b604082015260600190565b90815260200190565b9182526001600160a01b0316602082015260400190565b918252602082015260400190565b6001600160a01b038116811461126c57600080fd5b5056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a26469706673582212206ff56c0df1d3d6ba9f388ef5ecded23f8689947d308512910683e956430d47a264736f6c63430007060033416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365";

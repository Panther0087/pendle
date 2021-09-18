/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { PendleForgeV2EmergencyHandler } from "../PendleForgeV2EmergencyHandler";

export class PendleForgeV2EmergencyHandler__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _governanceManager: string,
    _data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PendleForgeV2EmergencyHandler> {
    return super.deploy(
      _governanceManager,
      _data,
      overrides || {}
    ) as Promise<PendleForgeV2EmergencyHandler>;
  }
  getDeployTransaction(
    _governanceManager: string,
    _data: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _governanceManager,
      _data,
      overrides || {}
    );
  }
  attach(address: string): PendleForgeV2EmergencyHandler {
    return super.attach(address) as PendleForgeV2EmergencyHandler;
  }
  connect(signer: Signer): PendleForgeV2EmergencyHandler__factory {
    return super.connect(signer) as PendleForgeV2EmergencyHandler__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PendleForgeV2EmergencyHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PendleForgeV2EmergencyHandler;
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
        name: "_data",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "data",
    outputs: [
      {
        internalType: "contract IPendleData",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "forgeData",
    outputs: [
      {
        internalType: "contract IPendleYieldTokenHolder",
        name: "yieldTokenHolder",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "yieldToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "rewardToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "ot",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "totalOt",
        type: "uint256",
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
        internalType: "address",
        name: "_forgeAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "extraFlag",
        type: "bool",
      },
    ],
    name: "setUpEmergencyMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_forgeAddr",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516112b63803806112b683398101604081905261002f916100cc565b816001600160a01b03811661007a576040805162461bcd60e51b815260206004820152600c60248201526b5a45524f5f4144445245535360a01b604482015290519081900360640190fd5b600080546001600160a01b031916331790556001600160601b0319606091821b81166080526001805591901b1660a052506100fe565b80516001600160a01b03811681146100c757600080fd5b919050565b600080604083850312156100de578182fd5b6100e7836100b0565b91506100f5602084016100b0565b90509250929050565b60805160601c60a05160601c6111856101316000398061012052806107ae5250806101445280610a7952506111856000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806353a426c31461005c57806373d4a13a14610089578063d2e6d1c31461009e578063d9caed12146100a6578063e51650ce146100bb575b600080fd5b61006f61006a366004610f0b565b6100ce565b60405161008095949392919061102f565b60405180910390f35b61009161011e565b6040516100809190610fb9565b610091610142565b6100b96100b4366004610f0b565b610166565b005b6100b96100c9366004610f4b565b6104cf565b6002602081815260009485526040808620825293855283852090529083529120805460018201549282015460038301546004909301546001600160a01b0392831694831693918316929091169085565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b038084166000908152600260209081526040808320938616835292815282822084835281528282203383526005019052205483908390839060ff16156101ce5760405162461bcd60e51b81526004016101c590611062565b60405180910390fd5b60026001541415610226576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260018190556001600160a01b0380881660009081526020928352604080822089841683528452808220888352909352828120600381015493516370a0823160e01b81529093919291909116906370a0823190610288903390600401610fb9565b60206040518083038186803b1580156102a057600080fd5b505afa1580156102b4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d89190610fa1565b905060006102f383600401548361095e90919063ffffffff16565b600184015484546040516370a0823160e01b815292935060009261038a926001600160a01b03908116926370a08231926103339290911690600401610fb9565b60206040518083038186803b15801561034b57600080fd5b505afa15801561035f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103839190610fa1565b8390610991565b845460018601549192506103ac916001600160a01b03908116911633846109b8565b600284015484546040516370a0823160e01b815260009261043e926001600160a01b03918216926370a08231926103e7921690600401610fb9565b60206040518083038186803b1580156103ff57600080fd5b505afa158015610413573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104379190610fa1565b8490610991565b85546002870154919250610460916001600160a01b03908116911633846109b8565b600485015461046f9085610a18565b600490950194909455505060018080556001600160a01b039586166000908152600260209081526040808320979098168252958652868120948152938552858420338552600501909452505091909120805460ff19169091179055505050565b6104d7610a75565b6001600160a01b0316336001600160a01b03161461052e576040805162461bcd60e51b815260206004820152600f60248201526e4f4e4c595f474f5645524e414e434560881b604482015290519081900360640190fd5b6001600160a01b038085166000908152600260209081526040808320878516845282528083208684529091529020805490911661057d5760405162461bcd60e51b81526004016101c59061108f565b60405163254fa40160e11b815285906001600160a01b03821690634a9f4802906105b1908890889030908990600401610fe6565b600060405180830381600087803b1580156105cb57600080fd5b505af11580156105df573d6000803e3d6000fd5b5050604051631cfa719b60e11b81526001600160a01b03841692506339f4e33691506106119088908890600401610fcd565b60206040518083038186803b15801561062957600080fd5b505afa15801561063d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106619190610eef565b82546001600160a01b0319166001600160a01b0391821617808455604080516376d5de8560e01b8152905191909216916376d5de859160048083019260209291908290030181600087803b1580156106b857600080fd5b505af11580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f09190610eef565b6001830180546001600160a01b0319166001600160a01b0392831617905582546040805163f7c618c160e01b81529051919092169163f7c618c19160048083019260209291908290030181600087803b15801561074c57600080fd5b505af1158015610760573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107849190610eef565b8260020160006101000a8154816001600160a01b0302191690836001600160a01b031602179055507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631f019ead826001600160a01b031663beb9a9736040518163ffffffff1660e01b815260040160206040518083038186803b15801561081457600080fd5b505afa158015610828573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084c9190610fa1565b87876040518463ffffffff1660e01b815260040161086c93929190611010565b60206040518083038186803b15801561088457600080fd5b505afa158015610898573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bc9190610eef565b6003830180546001600160a01b0319166001600160a01b039283161790819055604080516318160ddd60e01b8152905191909216916318160ddd916004808301926020929190829003018186803b15801561091657600080fd5b505afa15801561092a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061094e9190610fa1565b8260040181905550505050505050565b6000610988826109826109778665010000000000610b01565b6002865b0490610b5a565b90610bb4565b90505b92915050565b6000610988650100000000006109826109aa8686610b01565b60026501000000000061097b565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610a12908590610c1b565b50505050565b600082821115610a6f576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635aa6e6756040518163ffffffff1660e01b815260040160206040518083038186803b158015610ad057600080fd5b505afa158015610ae4573d6000803e3d6000fd5b505050506040513d6020811015610afa57600080fd5b5051905090565b600082610b105750600061098b565b82820282848281610b1d57fe5b04146109885760405162461bcd60e51b81526004018080602001828103825260218152602001806111056021913960400191505060405180910390fd5b600082820183811015610988576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000808211610c0a576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610c1357fe5b049392505050565b6000610c70826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610cd19092919063ffffffff16565b805190915015610ccc57808060200190516020811015610c8f57600080fd5b5051610ccc5760405162461bcd60e51b815260040180806020018281038252602a815260200180611126602a913960400191505060405180910390fd5b505050565b6060610ce08484600085610cea565b90505b9392505050565b606082471015610d2b5760405162461bcd60e51b81526004018080602001828103825260268152602001806110df6026913960400191505060405180910390fd5b610d3485610e45565b610d85576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310610dc35780518252601f199092019160209182019101610da4565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114610e25576040519150601f19603f3d011682016040523d82523d6000602084013e610e2a565b606091505b5091509150610e3a828286610e4b565b979650505050505050565b3b151590565b60608315610e5a575081610ce3565b825115610e6a5782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610eb4578181015183820152602001610e9c565b50505050905090810190601f168015610ee15780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b600060208284031215610f00578081fd5b8151610988816110c6565b600080600060608486031215610f1f578182fd5b8335610f2a816110c6565b92506020840135610f3a816110c6565b929592945050506040919091013590565b60008060008060808587031215610f60578081fd5b8435610f6b816110c6565b93506020850135610f7b816110c6565b92506040850135915060608501358015158114610f96578182fd5b939692955090935050565b600060208284031215610fb2578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039485168152602081019390935292166040820152901515606082015260800190565b9283526001600160a01b03919091166020830152604082015260600190565b6001600160a01b039586168152938516602085015291841660408401529092166060820152608081019190915260a00190565b6020808252601390820152724e4f5448494e475f544f5f574954484452415760681b604082015260600190565b6020808252601a908201527f4455504c4943415445445f454d455247454e43595f5345545550000000000000604082015260600190565b6001600160a01b03811681146110db57600080fd5b5056fe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212202ae512df0b4d0cc8ee4f872d65605308ab0b6725cf941f72ab0d864b486742ac64736f6c63430007060033";
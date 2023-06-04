import {atom, selector} from 'recoil';

export const IsSignedInState = atom({
  key: 'isSignedIn',
  default: '',
});

export const ContractIdState = atom({
  key: 'contractId',
  default: '',
});

export const WalletState = atom({
  key: 'wallet',
  default: '',
});

import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'compoundInterest' : () => Promise<undefined>,
  'deposit' : (arg_0: number) => Promise<undefined>,
  'withdraw' : (arg_0: number) => Promise<undefined>,
}

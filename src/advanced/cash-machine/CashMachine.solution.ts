import {AbstractCashMachine, CashMachineState} from './AbstractCashMachine';
import {CashInterface} from './Cash.interface';

export class CashMachine extends AbstractCashMachine {

  constructor(state: CashMachineState) {
    super(state);
  }

  login(id: number, pin: number) {
    throw new Error('Not yet implemented');
  }

  logout() {
    throw new Error('Not yet implemented');
  }

  getBalance(): number {
    throw new Error('Not yet implemented');
  }

  withdraw(cash: CashInterface) {
    throw new Error('Not yet implemented');
  }
}

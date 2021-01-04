import {AccountInterface} from './Account.interface';
import {CashInterface} from './Cash.interface';

export interface CashMachineState {
  accounts: AccountInterface[];
  stock: CashInterface;
  cashBox: CashInterface;
}

export abstract class AbstractCashMachine {
  protected stock: CashInterface;
  protected accounts: AccountInterface[];
  protected cashBox: CashInterface;
  protected session: AccountInterface | null;
  protected pinCounter: 0;

  protected constructor(state: CashMachineState) {
    this.stock = state.stock;
    this.accounts = state.accounts;
    this.session = null;
    this.cashBox = state.cashBox;
    this.pinCounter = 0;
  }

  public abstract login(id: number, pin: number): void;

  public abstract logout(): void;

  public abstract getBalance(): number;

  public abstract withdraw(cash: CashInterface): void;

  public getStock() {
    return this.stock;
  }
  public checkCashBox() {
    return this.cashBox;
  }
}

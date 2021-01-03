import {AccountInterface} from './Account.interface';
import {CashInterface} from './Cash.interface';

export interface CashMachineState {
  accounts: AccountInterface[],
  stock: CashInterface,
  // cashBox: String[],
}

export abstract class AbstractCashMachine {
  protected stock: CashInterface;
  protected accounts: AccountInterface[];
  // protected cashBox: String[];
  protected session: AccountInterface | null;

  protected constructor(state: CashMachineState) {
    this.stock = state.stock;
    this.accounts = state.accounts;
    this.session = null;
    // this.cashBox = String[];
  }

  public abstract login(id: number, pin: number): void;

  public abstract logout(): void;

  public abstract getBalance(): number;

  public abstract withdraw(cash: CashInterface): void;

  public getStock() {
    return this.stock;
  }
}

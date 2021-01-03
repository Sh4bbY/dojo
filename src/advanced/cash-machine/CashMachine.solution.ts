import { AbstractCashMachine, CashMachineState } from "./AbstractCashMachine";
import { CashInterface } from "./Cash.interface";

export class CashMachine extends AbstractCashMachine {
  constructor(state: CashMachineState) {
    super(state);
  }

  login(id: number, pin: number) {
    const account = this.accounts.find((account) => account.id === id);
    if (!account) {
      return "No Account found";
    }
    // let pinCounter = 0;
    if (account.pin !== pin) {
      return "wrong PIN, try again";
      // pinCounter++
    }
    if (account.pin === pin) {
      this.session = account;
      return "logged in, hello account nr." + account.id;
    }
    // console.log(account);
  }

  logout() {

    delete this.session;
    return "Thanks for using money";
  }

  getBalance(): number {
    return this.session.balance;
  }

  private getCashSum(cash) {
    let cashSum = 0;
    Object.entries(cash).forEach((note) => {
      cashSum += Number(note[0]) * Number(note[1]);
    });
    return cashSum;
  }

  withdraw(cash: CashInterface) {
    const cashSum = this.getCashSum(cash);

    if (this.session.balance < cashSum) {
      console.log(`not enough funds, you have ${this.session.balance} moneys available, but you want to withdraw ${cashSum} moneys.`);
    }
    if (this.session.balance >= cashSum) {
      this.session.balance -= cashSum;
      Object.entries(cash).forEach((note) => {
        this.stock[note[0]] -= note[1];
      });
    }
  }
}

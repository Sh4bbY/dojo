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
  changeNotes(inputCash, desiredCash) {
    // console.log(inputCash);
    // console.log(desiredCash);
    const inputSum = this.getCashSum(inputCash);
    const desiredSum = this.getCashSum(desiredCash);
    if (inputSum < desiredSum) {
      return `You need to add ${desiredSum - inputSum} moneys`;
    }
    if (inputSum > desiredSum) {
      return `You need to chose ${inputSum - desiredSum} more moneys`;
    }
    if (inputSum === desiredSum) {
      //add to stock
      Object.entries(inputCash).forEach((note) => {
        this.stock[note[0]] += Number(note[1]);
      });
      //add to balance
      this.session.balance += inputSum;
      // cashOut
      this.withdraw(desiredCash);
    }
  }

  withdraw(cash: CashInterface) {
    const cashSum = this.getCashSum(cash);

    if (this.session.balance < cashSum) {
      console.log(
        `not enough funds, you have ${this.session.balance} moneys available, but you want to withdraw ${cashSum} moneys.`
      );
    }
    //cashout
    if (this.session.balance >= cashSum) {
      this.session.balance -= cashSum;
      Object.entries(cash).forEach((note) => {
        this.stock[note[0]] -= note[1];
        // this.cashBox.push('100');
      });

      // console.log(this.cashBox);
      console.log(`paid out ${cashSum} in "${this.listCash(cash)}" Notes `);
    }
  }
  listCash(cash) {
    let output = [];
     Object.entries(cash).forEach((note) => {
      output.push([` ${note[1]} times ${note[0]}`]);
    });
    return output;
  }
}

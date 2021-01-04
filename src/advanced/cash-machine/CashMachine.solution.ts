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
      // throw new Error("No Account found");
    }
    if(this.pinCounter >2) {
      return "entered PIN wrong 3 times";
      // throw new Error("entered PIN wrong 3 times");
    }
    if (account.pin !== pin) {
      this.pinCounter++;
      return "wrong PIN, try again";
      // throw new Error("wrong PIN, try again");
    }
    this.session = account;
    return "logged in, hello account nr." + account.id;
  }

  logout() {
    if (!this.session) {
      return "No active session";
      // throw new Error("No active session");
    }
    if (this.cashBox) {
      return "Pick up your money before logging off";
    }
    // const account = this.accounts.find((account) => account.id === this.session.id);
    // account.balance = this.session.balance;
    this.session = null;
    // console.log(this.accounts);

    return "Thanks for using money";
  }

  getBalance(): number {
    // this.errorHandling("getBalance");
        if (!this.session) {
          // return "No active session";
          throw new Error("No active session");
        }
    return this.session.balance;
  }

  private getCashSum(cash) {
    let cashSum = 0;
    Object.entries(cash).forEach((note) => {
      cashSum += Number(note[0]) * Number(note[1]);
    });
    return cashSum;
  }

  // private errorHandling(input) {
  //   switch (input) {
  //     case "getBalance":
  //     case "deposit":
  //       if (!this.session) {
  //         // return "No active session";
  //         throw new Error("No active session");
  //       }
  //       if (!this.session) {
  //         // return "No active session";
  //         throw new Error("No active session");
  //       }
  //   }
  // }
// 22:28 $ git commit -a -m "added max pin input, cashbox, optional errorhandling, deposit,
  deposit(cash) {
    // this.errorHandling("deposit");
        if (!this.session) {
          return "No active session";
          // throw new Error("No active session");
        }
    const cashSum = this.getCashSum(cash);
    Object.entries(cash).forEach((note) => {
      this.stock[note[0]] += Number(note[1]);
    });
    //add to balance
    this.session.balance += cashSum;
    return `Successfully added ${cashSum} to your Account \n  Current Balance: ${this.session.balance}`;
  }

  changeNotes(inputCash, desiredCash) {
    if (!this.session) {
      return "No active session";
      // throw new Error("No active session");
    }
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
      return this.withdraw(desiredCash);
    }
  }

  withdraw(cash: CashInterface) {
    if (!this.session) {
      return "No active session";
      // throw new Error("No active session");
    }
    const cashSum = this.getCashSum(cash);

    if (this.session.balance < cashSum) {
      return `Not enough funds.\nyou have ${this.session.balance} moneys available, but you want to withdraw ${cashSum} moneys.`;
    }
    //cashout
    if (this.session.balance >= cashSum) {
      this.session.balance -= cashSum;
      Object.entries(cash).forEach((note) => {
        this.stock[note[0]] -= note[1];
        this.cashBox[note[0]] += note[1];
      });

      return `paid out ${cashSum} moneys in: ${this.listCash(cash)} `;
    }
  }

  releaseCash() {
    if (!this.session) {
      return "No active session";
      // throw new Error("No active session");
    }
    if (this.cashBox) {
      this.cashBox = null;
      return "You can now take the money out of the cashbox";
    }
  }

  private listCash(cash) {
    let output = [];
    Object.entries(cash).forEach((note) => {
      output.push([`\n  ${note[1]} times ${note[0]} Notes`]);
    });
    return output;
  }
}

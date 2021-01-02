import { AbstractSodaMachine, SodaMachineConfiguration } from "./AbstractSodaMachine";
import { Coin } from "./Coin.enum";

export class SodaMachine extends AbstractSodaMachine {
  constructor(configuration: SodaMachineConfiguration) {
    super(configuration);
  }

  public insertCoin(coin: Coin): void {
    // if (!coin) {
    //   return;
    // }
    //zu credit adden, wenn was ausgewählt ist und der preis stimmt, produkt ausgeben + wechselgeld
    this.credit.push(coin);

    if (this.product && this.creditSum() >= this.product.price) {
      this.creditToCashback();
      this.releaseProduct();
      delete this.product;
    }
          // console.log(this.coins);
  }

  public creditToCashback() {
    const overpaid = this.creditSum() - this.product.price;
    // console.log(overpaid);
    if (overpaid > 0) {
    this.credit.forEach((coin) => this.coins[coin]++);
    console.log(this.product.price);
    }
      // for (let i = 0 ; overpaid > 0; i++){
      //       console.log(this.coins);
      //     // }
      //     }
      // console.log(overpaid);
      // for (let i = 0 ; overpaid > 0; i++){
      //   console.log(this.coins[i]);
      // }
      // let change = this.credit.indexOf(overpaid);
      // get money from coins
      // if (change !== -1) {
      //   this.cashBack.push(this.credit[change]);
      // }
      //put coins in machine
    
    if (overpaid === 0) {
      this.settle();
    }
  }
  private settle() {
    this.credit.forEach((coin) => this.coins[coin]++);
    this.credit = [];
  }

  private releaseProduct() {
    this.productBox.push(this.product.name);
  }

  public selectProduct(id: number) {
    const selection = this.products.find((product) => product.id === id);
    if (!selection) {
      throw new Error("Product not found");
    }
    if (selection.amount === 0) {
      throw new Error(selection.name + " is out of stock");
    }
    this.product = selection;
    selection.amount -= 1;
  }

  public cancel(): void {
    this.reset();
    return;
  }

  public creditSum(): number {
    return this.credit.reduce((acc, curr) => acc + curr, 0);
  }
}

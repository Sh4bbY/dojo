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
    if (this.product && this.product.price < this.creditSum()) {
      this.creditToCashback();
    }
    if (this.product && this.product.price === this.creditSum()) {
      this.releaseProduct();
      this.product = null;
    }
    // console.log(this.coins);
  }

  public creditToCashback() {
    console.log(this.product);
    let overpaid = this.creditSum() - this.product.price;
    console.log(overpaid);
    if (overpaid > 0) {
      // this.credit.forEach((coin) => this.coins[coin]++);
      //for loop can interrupt
      Object.entries(this.coins)
        .slice()
        .reverse()
        .forEach((coin) => {
          if (Number(coin[0]) <= overpaid) {
            this.cashBack.push(Number(coin[0]));
            overpaid -= Number(coin[0]);
          }
          console.log(overpaid);
          console.log(this.cashBack);
        });
    }

    // for(let i = this.coins.length; overpaid>0;i--) {
    //   if (this.coins[i] <= overpaid) {
    //     this.cashBack[this.coins[i]]++;
    //     overpaid -= this.coins[i];
    //   }
    // console.log(this.coins);

    // }

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

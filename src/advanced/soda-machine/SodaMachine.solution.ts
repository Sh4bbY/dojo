import { AbstractSodaMachine, SodaMachineConfiguration } from "./AbstractSodaMachine";
import { Coin } from "./Coin.enum";

export class SodaMachine extends AbstractSodaMachine {
  constructor(configuration: SodaMachineConfiguration) {
    super(configuration);
  }

  public insertCoin(coin: Coin): void {
    this.credit.push(coin);

    if (!this.product) {
      return;
    }

    if (this.creditSum() >= this.product.price) {
      this.settle();
      this.returnProduct();
    }
  }

  private calculateCashBack(balance) {
    const orderedCoins = Object.keys(this.coins).sort((a, b) => Number(b) - Number(a));
    const cashBack = [];
    let sum = 0;
    if (balance > 0) {
      orderedCoins.forEach((coin) => {
        const value = Number(coin);
        while (this.coins[coin] > 0 && sum + value <= balance) {
          sum += value;
          this.coins[coin]--;
          cashBack.push(coin);
        }
      });
    }
    return cashBack;
  }

  private returnProduct() {
    this.productBox.push(this.product.name);
    this.product = null;
  }

  public selectProduct(id: number) {
    this.product = this.products.find((product) => product.id === id);
    if (!this.product) {
      throw new Error("Product not found");
    }
    if (this.product.amount === 0) {
      throw new Error(this.product.name + " is out of stock");
    }

    if (this.creditSum() >= this.product.price) {
      this.settle();
      this.returnProduct();
    }
  }

  private settle() {
    let balance = this.creditSum() - this.product.price;
    const cashBack = this.calculateCashBack(balance);
    this.cashBack = this.cashBack.concat(cashBack);

    this.credit.forEach((coin) => this.coins[coin]++);
    this.credit = [];
    this.product.amount--;
  }

  public cancel(): void {
    this.reset();
    return;
  }

  public creditSum(): number {
    return this.credit.reduce((sum, coin) => sum + coin, 0);
  }
}

import {Coin} from './Coin.enum';
import {Product} from './Product.interface';

export interface SodaMachineConfiguration {
  coins: { [value: string]: number },
  products: Product[],
}

export abstract class AbstractSodaMachine {
  private readonly initialCoins: { [value: string]: number };
  private readonly initialProducts: Product[];

  protected coins: { [value: string]: number };
  protected products: Product[];
  protected credit: Coin[];
  protected product: Product;
  protected cashBack: Coin[];
  protected productBox: string[];

  protected constructor(configuration: SodaMachineConfiguration) {
    this.initialCoins = configuration.coins;
    this.initialProducts = configuration.products;
    this.reset();
  }

  public abstract insertCoin(coin: Coin): void;

  public abstract selectProduct(id: number): void;

  public abstract creditSum(): number;

  public abstract cancel(): void;

  public getSelection(): string | undefined {
    return this.product?.name;
  }

  public getProducts(): Product[] {
    return this.products;
  }

  public getPurchases(): string[] {
    return this.productBox;
  }

  public getCashBack(): Coin[] {
    return this.cashBack;
  }

  public getCredit(): Coin[] {
    return this.credit;
  }

  public getCoinStock(): { [value: string]: number } {
    return this.coins;
  }

  public getDisplay(): string {
    return `Selection: ${this.product?.name}; Credit: ${this.creditSum()}; CashBack: ${this.cashBack}; Purchases: ${this.productBox}`;
  }

  public reset(): void {
    this.coins = Object.assign({}, this.initialCoins);
    this.products = this.initialProducts.map(p => Object.assign({}, p));
    this.credit = [];
    this.cashBack = [];
    this.productBox = [];
    this.product = null;
  }
}

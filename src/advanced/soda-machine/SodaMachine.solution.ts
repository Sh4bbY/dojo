import {AbstractSodaMachine, SodaMachineConfiguration} from './AbstractSodaMachine';
import {Coin} from './Coin.enum';

export class SodaMachine extends AbstractSodaMachine {

  constructor(configuration: SodaMachineConfiguration) {
    super(configuration);
  }

  public insertCoin(coin: Coin): void {
    throw new Error('Not yet implemented');
  }

  public selectProduct(id: number) {
    throw new Error('Not yet implemented');
  }

  public cancel(): void {
    throw new Error('Not yet implemented');
  }

  public creditSum(): number {
    throw new Error('Not yet implemented');
  }
}

import {Coin} from './Coin.enum';
import {SodaMachine} from './SodaMachine.solution';

describe('SodaMachine', () => {
  const sodaMachine = new SodaMachine({
    products: [
      { id: 1, name: "Water", amount: 20, price: 100 },
      { id: 2, name: "Coke", amount: 10, price: 200 },
      { id: 3, name: "Sprite", amount: 10, price: 150 },
      { id: 4, name: "Ginger Ale", amount: 1, price: 250 },
    ],
    coins: {
      [Coin.C5]: 10,
      [Coin.C10]: 10,
      [Coin.C20]: 10,
      [Coin.C50]: 10,
      [Coin.E1]: 10,
      [Coin.E2]: 10,
    }

  });


  it('should add coins to the credit', () => {
    sodaMachine.reset();
    sodaMachine.insertCoin(Coin.E1);
    sodaMachine.insertCoin(Coin.C50);
    sodaMachine.insertCoin(Coin.C50);
    expect(sodaMachine.getCredit()).toStrictEqual([Coin.E1, Coin.C50, Coin.C50]);
  });

  it('should calculate the CreditSum', () => {
    sodaMachine.reset();
    sodaMachine.insertCoin(Coin.E1);
    sodaMachine.insertCoin(Coin.C50);
    sodaMachine.insertCoin(Coin.C50);
    expect(sodaMachine.creditSum()).toBe(200);
    sodaMachine.insertCoin(Coin.C20);
    sodaMachine.insertCoin(Coin.C10);
    sodaMachine.insertCoin(Coin.E1);
    expect(sodaMachine.creditSum()).toBe(330);
  });

  it('should allow to purchase a drink', () => {
    const product = {id: 2, name: 'Coke'};

    sodaMachine.reset();
    sodaMachine.selectProduct(product.id);
    expect(sodaMachine.getPurchases()).toStrictEqual([]);
    expect(sodaMachine.getSelection()).toEqual(product.name);
    sodaMachine.insertCoin(Coin.E1);
    expect(sodaMachine.getPurchases()).toStrictEqual([]);
    sodaMachine.insertCoin(Coin.C50);
    expect(sodaMachine.getPurchases()).toStrictEqual([]);
    sodaMachine.insertCoin(Coin.C50);
    expect(sodaMachine.getPurchases()).toStrictEqual([product.name]);
    expect(sodaMachine.getSelection()).toEqual(undefined);
    expect(sodaMachine.getCoinStock()[Coin.C50]).toBe(12);
    expect(sodaMachine.getCoinStock()[Coin.E1]).toBe(11);
    expect(sodaMachine.getProducts().find(p => p.id === product.id).amount).toBe(9);
  });

  it('should throw an Error when product cannot be found', () => {
    sodaMachine.reset();
    expect(() => sodaMachine.selectProduct(10)).toThrow('Product not found');
  });

  it('should throw an Error when product is out of stock', () => {
    sodaMachine.reset();
    sodaMachine.selectProduct(4);
    sodaMachine.insertCoin(Coin.E2);
    sodaMachine.insertCoin(Coin.E2);
    expect(() => sodaMachine.selectProduct(4)).toThrow('Ginger Ale is out of stock');
  });

  it('should allow to purchase drinks and return cashback', () => {
    sodaMachine.reset();
    const products = [
      {id: 2, name: 'Coke'},
      {id: 3, name: 'Sprite'},
      {id: 4, name: 'Ginger Ale'},
    ];

    sodaMachine.selectProduct(products[0].id);
    expect(sodaMachine.getSelection()).toEqual(products[0].name);
    sodaMachine.insertCoin(Coin.E1);
    sodaMachine.insertCoin(Coin.C50);
    sodaMachine.insertCoin(Coin.C50);
    expect(sodaMachine.getPurchases()).toStrictEqual([products[0].name]);
    expect(sodaMachine.getCashBack()).toStrictEqual([]);
    expect(sodaMachine.getSelection()).toEqual(undefined);

    sodaMachine.insertCoin(Coin.E2);
    sodaMachine.insertCoin(Coin.C50);
    sodaMachine.insertCoin(Coin.C10);
    sodaMachine.selectProduct(products[1].id);
    expect(sodaMachine.getPurchases()).toStrictEqual([products[0].name, products[1].name]);
    expect(sodaMachine.getCashBack()).toStrictEqual([String(Coin.E1), String(Coin.C10)]);
    expect(sodaMachine.getCredit()).toStrictEqual([]);
    expect(sodaMachine.creditSum()).toStrictEqual(0);
    expect(sodaMachine.getSelection()).toEqual(undefined);


    // 2€ in 10cent
    for (let i = 0; i < 20; i++) {
      sodaMachine.insertCoin(Coin.C10);
    }
    sodaMachine.selectProduct(products[2].id);
    expect(sodaMachine.getPurchases()).toStrictEqual([products[0].name, products[1].name]);
    expect(sodaMachine.getCashBack()).toStrictEqual([String(Coin.E1), String(Coin.C10)]);
    expect(sodaMachine.creditSum()).toStrictEqual(200);
    expect(sodaMachine.getSelection()).toEqual(products[2].name);
    sodaMachine.insertCoin(Coin.E2);
    expect(sodaMachine.getPurchases()).toStrictEqual([products[0].name, products[1].name, products[2].name]);
    expect(sodaMachine.getCashBack()).toStrictEqual([String(Coin.E1), String(Coin.C10), String(Coin.E1), String(Coin.C50)]);

    expect(sodaMachine.getCoinStock()[Coin.C10]).toBe(30);
    expect(sodaMachine.getCoinStock()[Coin.C50]).toBe(12);
    expect(sodaMachine.getCoinStock()[Coin.E1]).toBe(9);
    expect(sodaMachine.getCoinStock()[Coin.E2]).toBe(12);
    expect(sodaMachine.getProducts().find(p => p.id === products[0].id).amount).toBe(9);
    expect(sodaMachine.getProducts().find(p => p.id === products[1].id).amount).toBe(9);
    expect(sodaMachine.getProducts().find(p => p.id === products[2].id).amount).toBe(0);
  });
});


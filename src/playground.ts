import { CashMachine } from "./advanced/cash-machine/CashMachine.solution";
import { CashInterface } from "./advanced/cash-machine/Cash.interface";
const cashMachine = new CashMachine({
  stock: {
    5: 100,
    10: 200,
    20: 200,
    50: 100,
    100: 100,
    200: 100,
    500: 50,
  },
  accounts: [
    { id: 1, pin: 1234, balance: 1000 },
    { id: 2, pin: 4567, balance: 20 },
    { id: 1, pin: 4321, balance: -20 },
  ],
});

console.log(cashMachine.login(1, 1234));
console.log(cashMachine.getBalance());
cashMachine.withdraw({ 100: 3, 500: 3 });
console.log(cashMachine.getBalance());
console.log(cashMachine.getStock());
console.log(cashMachine.logout());



// import { Coin } from "./advanced/soda-machine/Coin.enum";
// import { SodaMachine } from "./advanced/soda-machine/SodaMachine.solution";

// const sodaMachine = new SodaMachine({
//   products: [
//     { id: 1, name: "Water", amount: 20, price: 100 },
//     { id: 2, name: "Coke", amount: 10, price: 200 },
//     { id: 3, name: "Sprite", amount: 10, price: 150 },
//     { id: 4, name: "Ginger Ale", amount: 1, price: 250 },
//   ],
//   coins: {
//     [Coin.C5]: 10,
//     [Coin.C10]: 10,
//     [Coin.C20]: 10,
//     [Coin.C50]: 10,
//     [Coin.E1]: 10,
//     [Coin.E2]: 10,
//   },
// });

// const products = [
//   { id: 2, name: "Coke" },
//   { id: 3, name: "Sprite" },
//   { id: 4, name: "Ginger Ale" },
// ];

// sodaMachine.selectProduct(products[0].id);
// sodaMachine.getSelection();
// sodaMachine.insertCoin(Coin.E1);
// sodaMachine.insertCoin(Coin.C50);
// sodaMachine.insertCoin(Coin.C50);
// console.log(sodaMachine.getPurchases());
// // console.log(sodaMachine.getDisplay());
// // expect(sodaMachine.getPurchases()).toStrictEqual([products[0].name]);
// // expect(sodaMachine.getCashBack()).toStrictEqual([]);
// // expect(sodaMachine.getSelection()).toEqual(undefined);

// sodaMachine.selectProduct(products[1].id);

// sodaMachine.insertCoin(Coin.E2);
// sodaMachine.insertCoin(Coin.C50);
// sodaMachine.insertCoin(Coin.C10);

// console.log(sodaMachine.getPurchases());
// // console.log(sodaMachine.creditSum());
// // expect(sodaMachine.getCashBack()).toStrictEqual([String(Coin.E1), String(Coin.C10)]);
// // expect(sodaMachine.getCredit()).toStrictEqual([]);
// // expect(sodaMachine.creditSum()).toStrictEqual(0);
// // expect(sodaMachine.getSelection()).toEqual(undefined);

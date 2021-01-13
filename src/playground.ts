// import { CashMachine } from "./advanced/cash-machine/CashMachine.solution";
// import { CashInterface } from "./advanced/cash-machine/Cash.interface";
// import { SodaMachine } from "./advanced/soda-machine/SodaMachine.solution";
// const cashMachine = new CashMachine({
//   stock: {
//     5: 100,
//     10: 200,
//     20: 200,
//     50: 100,
//     100: 100,
//     200: 100,
//     500: 50,
//   },
//   accounts: [
//     { id: 1, pin: 1234, balance: 1000 },
//     { id: 2, pin: 4567, balance: 20 },
//     { id: 1, pin: 4321, balance: -20 },
//   ],
//   cashBox: { 5: 0, 10: 0, 20: 0, 50: 0, 100: 0, 200: 0, 500: 0 },
// });
// // console.log(cashMachine.getBalance());

// console.log(cashMachine.login(1, 2234));
// // console.log(cashMachine.login(1, 3234));
// console.log(cashMachine.login(1, 4234));
// console.log(cashMachine.login(1, 1234));
// console.log(cashMachine.getBalance());
// console.log(cashMachine.withdraw({ 200: 6 }));
// // console.log(cashMachine.getBalance());
// // console.log(cashMachine.getStock());

// const inputCash = { 200: 8, 50: 1 };
// const desiredCash = { 100: 13, 20: 16, 10: 1, 5: 4 };
// // console.log(cashMachine.changeNotes(inputCash, desiredCash));
// // console.log(cashMachine.withdraw({ 100: 4, 10: 2 }));
// // cashMachine.changeNotes(inputCash, desiredCash);
// console.log(cashMachine.deposit(inputCash));
// console.log(cashMachine.withdraw({ 200: 6, 50: 10 }));
// // console.log(cashMachine.withdraw({ 200: 4 }));

// // console.log(cashMachine.getStock());
// // console.log(cashMachine.getBalance());
// // console.log(cashMachine.checkCashBox());
// console.log(cashMachine.releaseCash());
// console.log(cashMachine.logout());

// // console.log(cashMachine.login(2, 4567));
// // cashMachine.withdraw({ 5:1, 10:1 });
// // console.log(cashMachine.releaseCash());
// // console.log(cashMachine.logout());

// // console.log(cashMachine.getBalance());
// // console.log(cashMachine.getStock());

import { Coin } from "./advanced/soda-machine/Coin.enum";
import { SodaMachine } from "./advanced/soda-machine/SodaMachine.solution";

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
  },
});

const products = [
  { id: 2, name: "Coke" },
  { id: 3, name: "Sprite" },
  { id: 4, name: "Ginger Ale" },
];

// sodaMachine.reset();
sodaMachine.selectProduct(products[0].id);
// sodaMachine.getSelection();
sodaMachine.insertCoin(Coin.E1);
sodaMachine.insertCoin(Coin.C50);
// sodaMachine.insertCoin(Coin.E1);

sodaMachine.insertCoin(Coin.C50);
console.log(sodaMachine.getPurchases());
// console.log(sodaMachine.getCredit());
console.log(sodaMachine.getCashBack());
// console.log(sodaMachine.getSelection());

// // sodaMachine.selectProduct(products[1].id);
sodaMachine.insertCoin(Coin.E2);
sodaMachine.insertCoin(Coin.C50);
sodaMachine.insertCoin(Coin.C10);
// console.log(sodaMachine.getCredit());
// console.log(sodaMachine.getCoinStock());

sodaMachine.selectProduct(products[1].id);
// console.log(sodaMachine.getCredit());

console.log(sodaMachine.getPurchases());
console.log(sodaMachine.getCashBack());

// console.log(sodaMachine.getCredit());
// console.log(sodaMachine.creditSum());
// console.log(sodaMachine.getSelection());

// for (let i = 0; i < 20; i++) {
//   sodaMachine.insertCoin(Coin.C10);
// }

// sodaMachine.selectProduct(products[2].id);
// console.log(sodaMachine.getPurchases());
// console.log(sodaMachine.getCashBack());
// console.log(sodaMachine.creditSum());
// console.log(sodaMachine.getSelection());
// console.log(sodaMachine.insertCoin(Coin.E2));
// // console.log(sodaMachine.insertCoin(Coin.E1));
// // console.log(sodaMachine.getCredit());

// console.log(sodaMachine.getPurchases());
// console.log(sodaMachine.getCashBack());

// console.log(sodaMachine.getCoinStock() );

// expect(sodaMachine.getCashBack()).toStrictEqual([String(Coin.E1), String(Coin.C10)]);
// expect(sodaMachine.getCredit()).toStrictEqual([]);
// expect(sodaMachine.creditSum()).toStrictEqual(0);
// expect(sodaMachine.getSelection()).toEqual(undefined);

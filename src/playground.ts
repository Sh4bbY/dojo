





  // public turnToNorth() {
  //   switch (this.direction) {
  //     case Direction.NORTH:
  //       break;
  //     case Direction.EAST:
  //       this.turnLeft();
  //       break;
  //     case Direction.SOUTH:
  //       this.turnLeft();
  //       this.turnLeft();
  //       break;
  //     case Direction.WEST:
  //       this.turnRight();
  //       break;
  //   }
  // }

  // public turnToEast() {
  //   switch (this.direction) {
  //     case Direction.NORTH:
  //       this.turnRight();
  //       break;
  //     case Direction.EAST:
  //       break;
  //     case Direction.SOUTH:
  //       this.turnLeft();
  //       break;
  //     case Direction.WEST:
  //       this.turnRight();
  //       this.turnRight();
  //       break;
  //   }
  // }

  // public turnToSouth() {
  //   switch (this.direction) {
  //     case Direction.NORTH:
  //       this.turnRight();
  //       this.turnRight();
  //       break;
  //     case Direction.EAST:
  //       this.turnRight();
  //       break;
  //     case Direction.SOUTH:
  //       break;
  //     case Direction.WEST:
  //       this.turnLeft();
  //       break;
  //   }
  // }

  // public turnToWest() {
  //   switch (this.direction) {
  //     case Direction.NORTH:
  //       this.turnLeft();
  //       break;
  //     case Direction.EAST:
  //       this.turnRight();
  //       this.turnRight();
  //       break;
  //     case Direction.SOUTH:
  //       this.turnRight();
  //       break;
  //     case Direction.WEST:
  //       break;
  //   }
  // }

  // public async moveAxis(input, axis) {
  //   if (axis === "x" && input > this.x) {
  //     axis = this.x;
  //     this.turnToEast();
  //     await this.moveForwardNSteps(input - axis - 1);
  //   }
  //   if (axis === "x" && input < this.x) {
  //     axis = this.x;
  //     this.turnToWest();
  //     await this.moveForwardNSteps(input - axis - 1);
  //   }

  //   if (axis === "y" && input < this.y) {
  //     axis = this.y;
  //     this.turnToNorth();
  //     await this.moveForwardNSteps(axis - input - 1);
  //   }
  //   if (axis === "y" && input > this.y) {
  //     axis = this.y;
  //     this.turnToSouth();
  //     await this.moveForwardNSteps(axis - input - 1);
  //   }
  // }




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

sodaMachine.selectProduct(products[0].id);
sodaMachine.getSelection();
sodaMachine.insertCoin(Coin.E1);
sodaMachine.insertCoin(Coin.C50);
sodaMachine.insertCoin(Coin.C50);
console.log(sodaMachine.getPurchases());
// console.log(sodaMachine.getDisplay());
// expect(sodaMachine.getPurchases()).toStrictEqual([products[0].name]);
// expect(sodaMachine.getCashBack()).toStrictEqual([]);
// expect(sodaMachine.getSelection()).toEqual(undefined);

sodaMachine.selectProduct(products[1].id);

sodaMachine.insertCoin(Coin.E2);
sodaMachine.insertCoin(Coin.C50);
sodaMachine.insertCoin(Coin.C10);

console.log(sodaMachine.getPurchases());
// console.log(sodaMachine.creditSum());
    // expect(sodaMachine.getCashBack()).toStrictEqual([String(Coin.E1), String(Coin.C10)]);
    // expect(sodaMachine.getCredit()).toStrictEqual([]);
    // expect(sodaMachine.creditSum()).toStrictEqual(0);
    // expect(sodaMachine.getSelection()).toEqual(undefined);

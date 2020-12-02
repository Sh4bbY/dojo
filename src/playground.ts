import { BinarySearchTree } from "./advanced/binary-search-tree/BinarySearchTree.solution";

// let output = "111";

// var binaryArr = Array.from(String(binary), Number);
// let total = 0;
// console.log(binaryArr);
// for (let i=0;i<binaryArr.length;i++) {
//     total += (binaryArr[i])*(2**((binaryArr.length-1)-i));
// }
// console.log(total);

let num = 0;
let bin = [];
let remainder = 0;
let quotient = 0;
if (num === 0) {
  bin = [0];
}
while (num != 0) {
  remainder = num % 2;

  quotient = Math.floor(num / 2);
  num = quotient;
  bin.unshift(remainder);
}

console.log(bin.join(''));

// console.log(Math.floor(7/2));

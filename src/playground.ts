let num = 1;
let bin = 0;
let remaining = 0;
let quotient = 0;
let i = 1;  

while (num != 0) {
  remaining = num % 2;
  quotient = Math.floor(num / 2);
  num = quotient;
  bin += remaining * i;
  i = i * 10;
}

console.log(bin);
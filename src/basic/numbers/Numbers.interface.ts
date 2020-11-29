export interface NumbersInterface {
  sumOfTwo(a: number, b: number): number;

  sumOfMany(...numbers: number[]): number;

  isNumber(value: any): boolean;

  isNumeric(value: any): boolean;

  isDividableBy(num: number, divisor: number): boolean;

  isOddNumber(num: number): boolean;

  faculty(num: number): number;

  fibonacci(n: number): number[];

  readBinaryString(binary: string): number;

  getBinaryString(num: number): string;
}

import { StaticInterface } from "../../util/static.decorator";
import { NumbersInterface } from "./Numbers.interface";

@StaticInterface<NumbersInterface>()
export class Numbers {
  /**
   * should return the sum two number
   */
  public static sumOfTwo(a: number, b: number): number {
    return a + b;
  }

  /**
   * should return the sum of all numbers
   */
  public static sumOfMany(...numbers: number[]): number {
    // let total = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //   total += numbers[i];
    // }
    // return total;
    return numbers.reduce((sum, curr) => sum + curr, 0);
  }

  /**
   * should return true if the given value is of type Number. otherwise it should return false
   */
  public static isNumber(value: any): boolean {
    return typeof value === "number";
  }

  /**
   * should return true if the given value is numeric. otherwise it should return false
   */
  public static isNumeric(value: any): boolean {
    // return !(isNaN(value) || value === null);
    return !isNaN(value) && value !== null;
  }

  /**
   * should return true if the given number is dividable by the given divisor with rest 0. otherwise it should return false
   */
  public static isDividableBy(num: number, divisor: number): boolean {
    return Number.isInteger(num / divisor);
  }

  /**
   * should return true if the given number is Odd. otherwise it should return false
   */
  public static isOddNumber(num: number): boolean {
    return num % 2 !== 0 && !isNaN(num);
  }

  /**
   * should return the faculty of the given number
   */
  public static faculty(num: number): number {
    if (num === 0 || num === 1) {
      return 1;
    }

    let faculty = 1;
    for (let i = 2; i <= num; i++) {
      faculty *= i;
    }
    return faculty;
  }

  /**
   * should return the first N fibonacci numbers
   */
  public static fibonacci(n: number): number[] {
    function recurseFibo(array, n) {
      if (array.length === n) {
        return array;
      }
      const newFibo = array[array.length - 2] + array[array.length - 1];

      array.push(newFibo);
      return recurseFibo(array, n);
    }

    return recurseFibo([1, 1], n);
  }

  /**
   * should read a given binary string and return the respective decimal number
   */
  public static readBinaryString(binary: string): number {
    const binaryArr = Array.from(binary, Number);
    let output = 0;
    for (let i = 0; i < binaryArr.length; i++) {
      output += binaryArr[i] * 2 ** (binaryArr.length - 1 - i);
    }
    return output;
  }

  /**
   * should return the binary representation of a given decimal number
   */
  public static getBinaryString(num: number): string {
    let bin = 0;
    let remaining = 0;
    let i = 1;
    while (num !== 0) {
      remaining = num % 2;
      num = Math.floor(num / 2);
      bin += remaining * i;
      i = i * 10;
    }
    return bin.toString();
  }
}

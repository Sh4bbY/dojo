import {StaticInterface} from '../../util/static.decorator';
import {NumbersInterface} from './Numbers.interface';


@StaticInterface<NumbersInterface>()
export class Numbers {
  /**
   * should return the sum two number
   */
  public static sumOfTwo(a: number, b: number): number {
    return a + b;
    throw new Error('Not yet implemented');
  }

  /**
   * should return the sum of all numbers
   */
  public static sumOfMany(...numbers: number[]): number {
    let total = 0;
    let i = 0;
    for (i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given value is of type Number. otherwise it should return false
   */
  public static isNumber(value: any): boolean {
    if (typeof value === "number") {
      return true;
    } else {
      return false;
    }
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given value is numeric. otherwise it should return false
   */
  public static isNumeric(value: any): boolean {
    // return !isNaN(value);
    if (isNaN(value) == true || value == null) {
      return false;
    } else {
      return true;
    }
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given number is dividable by the given divisor with rest 0. otherwise it should return false
   */
  public static isDividableBy(num: number, divisor: number): boolean {
    return Number.isInteger(num / divisor);
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given number is Odd. otherwise it should return false
   */
  public static isOddNumber(num: number): boolean {
    if (num % 2 != 0 && !isNaN(num)) {
      return true;
    } else {
      return false;
    }
    throw new Error('Not yet implemented');
  }

  /**
   * should return the faculty of the given number
   */
  public static faculty(num: number): number {
    if (num == 0 || num == 1) {
      return 1;
    } 
    else {
      let faculty = 1;
      for (let i = 2; i <= num; i++) {
        faculty =  faculty * i;
      }
      return faculty;
    }
    throw new Error('Not yet implemented');
  }

  /**
   * should return the first N fibonacci numbers
   */
  public static fibonacci(n: number): number[] {
    throw new Error('Not yet implemented');
  }
}

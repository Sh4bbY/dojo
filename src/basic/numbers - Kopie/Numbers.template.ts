import {StaticInterface} from '../../util/static.decorator';
import {NumbersInterface} from './Numbers.interface';


@StaticInterface<NumbersInterface>()
export class Numbers {
  /**
   * should return the sum two number
   */
  public static sumOfTwo(a: number, b: number): number {
    throw new Error('Not yet implemented');
  }

  /**
   * should return the sum of all numbers
   */
  public static sumOfMany(...numbers: number[]): number {
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given value is of type Number. otherwise it should return false
   */
  public static isNumber(value: any): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given value is numeric. otherwise it should return false
   */
  public static isNumeric(value: any): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given number is dividable by the given divisor with rest 0. otherwise it should return false
   */
  public static isDividableBy(num: number, divisor: number): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * should return true if the given number is Odd. otherwise it should return false
   */
  public static isOddNumber(num: number): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * should return the faculty of the given number
   */
  public static faculty(num: number): number {
    throw new Error('Not yet implemented');
  }

  /**
   * should return the first N fibonacci numbers
   */
  public static fibonacci(n: number): number[] {
    throw new Error('Not yet implemented');
  }

  /**
   * should read a given binary string and return the respective decimal number
   */
  public static readBinaryString(binary: string): number {
    throw new Error('Not yet implemented');
  }


  /**
   * should return the binary representation of a given decimal number
   */
  public static getBinaryString(num: number): string {
    throw new Error('Not yet implemented');
  }
}

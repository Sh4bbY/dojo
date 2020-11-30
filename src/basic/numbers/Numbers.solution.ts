import {StaticInterface} from '../../util/static.decorator';
import {NumbersInterface} from './Numbers.interface';


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
    let total = 0;
    for (let i=0; i<numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  /**
   * should return true if the given value is of type Number. otherwise it should return false
   */
  public static isNumber(value: any): boolean {
    return typeof value === "number"
  }

  /**
   * should return true if the given value is numeric. otherwise it should return false
   */
  public static isNumeric(value: any): boolean {
    // return !isNaN(value);
    if (isNaN(value) === true || value === null) {
      return false;
    } else {
      return true;
    }
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
    if (num % 2 !== 0 && !isNaN(num)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * should return the faculty of the given number
   */
  public static faculty(num: number): number {
    if (num === 0 || num === 1) {
      return 1;
    } 
    else {
      let faculty = 1;
      for (let i = 2; i <= num; i++) {
        faculty =  faculty * i;
      }
      return faculty;
    }
  }

  /**
   * should return the first N fibonacci numbers
   */
  public static fibonacci(n: number): number[] {
    function recurseFibo(newArray, n) {
      if (newArray.length === n) {
        return newArray;
      }
      let newFibo = newArray[newArray.length-2] + newArray[newArray.length-1];
  
      newArray.push(newFibo);
      return recurseFibo(newArray, n);
    }
  
return recurseFibo([1,1], n);  
  }


  /**
   * should read a given binary string and return the respective decimal number
   */
  public static readBinaryString(binary: string): number {
    const binaryArr = Array.from(binary, Number);
    let total = 0;
    for (let i=0;i<binaryArr.length;i++) {
        total += (binaryArr[i])*(2**((binaryArr.length-1)-i));
    }
    return total;

  } 


  /**
   * should return the binary representation of a given decimal number
   */
  public static getBinaryString(num: number): string {
    
    throw new Error('Not yet implemented');
  }
}

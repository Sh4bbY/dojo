import { StaticInterface } from "../../util/static.decorator";
import { ArraysInterface } from "./Arrays.interface";

@StaticInterface<ArraysInterface>()
export class Arrays {
  /**
   * returns true if a given value is an Array
   */
  public static isArray(value: any): boolean {
    return Array.isArray(value);
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array that combines a and b
   */
  public static merge(a: any[], b: any[]): any[] {
    return a.concat(b);
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array where all odd numbers are removed
   */
  public static removeOddNumbers(values: number[]): number[] {
    return values.filter((e) => e % 2 == 0);
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array where all numbers are be multiplied by 2
   */
  public static duplicate(values: number[]): number[] {
    return values.map((e) => e * 2);
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array where all even numbers are be multiplied by 2
   */
  public static duplicateEven(values: number[]): number[] {
    const input = values;
    for (let i = 0; i < input.length; i++) {
      if (input[i] % 2 === 0) {
        input[i] *= 2;
      }
    }
    return input;
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array with the same items in ascending order
   */
  public static sortNumberASC(values: number[]): number[] {
    return values.sort(function (a, b) {
      return a - b;
    });
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array with the same items in given order
   */
  public static sortStrings(values: string[], ascendingOrder = true): string[] {
    const output = values.sort(function (a, b) {
      if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
      } else if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
    if (ascendingOrder == true) {
      return output;
    } else {
      return output.reverse();
    }
    throw new Error("Not yet implemented");
  }

  /**
   * returns a new array with the same items but in ascending order of the given property
   */
  public static sortObjects(values: any[], property: string): any[] {
    throw new Error("Not yet implemented");
  }

  /**
   * returns true when a and b are identical.
   */
  public static equals(a: any[], b: any[]): boolean {
    let counter = 0;
    for (let i = 1; i <= a.length; i++) {
      if (a[i] == b[i]) {
        counter = counter + 1;
      }
    }
    if (counter == a.length) {
      return true;
    } else {
      return false;
    }
    throw new Error("Not yet implemented");
  }

  /**
   * returns true when a and b contains the same items, even tough the order is not the same.
   */
  public static similar(a: any[], b: any[]): boolean {
    throw new Error("Not yet implemented");
  }

  /**
   * TODO: ...
   */
  public static map<T>(array: T[], fn: (item: T) => T): T[] {
    throw new Error("Not yet implemented");
  }

  /**
   * TODO: ...
   */
  public static reduce<T, R>(
    array: T[],
    fn: (accu: R, item: T, index?: number) => R,
    initial: R
  ): R {
    throw new Error("Not yet implemented");
  }
}

import { StaticInterface } from "../../util/static.decorator";
import { ArraysInterface } from "./Arrays.interface";

@StaticInterface<ArraysInterface>()
export class Arrays {
  /**
   * returns true if a given value is an Array
   */
  public static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  /**
   * returns a new array that combines a and b
   */
  public static merge(a: any[], b: any[]): any[] {
    return a.concat(b);
  }

  /**
   * returns a new array where all odd numbers are removed
   */
  public static removeOddNumbers(values: number[]): number[] {
    return values.filter((e) => e % 2 === 0);
  }

  /**
   * returns a new array where all numbers are be multiplied by 2
   */
  public static duplicate(values: number[]): number[] {
    return values.map((e) => e * 2);
  }

  /**
   * returns a new array where all even numbers are be multiplied by 2
   */
  public static duplicateEven(values: number[]): number[] {
    for (let i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        values[i] *= 2;
      }
    }
    return values;
  }

  /**
   * returns a new array with the same items in ascending order
   */
  public static sortNumberASC(values: number[]): number[] {
    return values.sort(function (a, b) {
      return a - b;
    });
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
    if (ascendingOrder === true) {
      return output;
    } else {
      return output.reverse();
    }
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
      if (a[i] === b[i]) {
        counter += 1;
      }
    }
    return counter === a.length;
  }

  /**
   * returns true when a and b contains the same items, even tough the order is not the same.
   */
  public static similar(a: any[], b: any[]): boolean {
    function sortArray(inputArray) {
      if (typeof a[0] != "number") {
        inputArray.sort(function (a, b) {
          if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
          } else if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
          } else {
            return 0;
          }
        });
        return inputArray;
      }

      inputArray.sort(function (a, b) {
        if (a < b) {
          return -1;
        } else if (a > b) {
          return 1;
        } else {
          return 0;
        }
      });
      return inputArray;
    }
    return sortArray(a).join().toLowerCase() === sortArray(b).join().toLowerCase();
  }

  /**
   * TODO: ...
   */
  public static map<T>(array: T[], fn: (item: T) => T): T[] {
    return array.map(fn);
  }

  /**
   * should reduce a array to a single value by the help of a function and one initial value
   */
  public static reduce<T, R>(array: T[], fn: (accu: R, item: T, index?: number) => R, initial: R): R {
    // const output = array.reduce(fn());
    //   return output;
    throw new Error("Not yet implemented");
  }

  /**
   * should find the median of the combination of 2 sorted arrays.
   * @difficulty: medium-hard
   */
  public static findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    function emptyArrayToZero(array) {
      if (Array.isArray(array) && !(array.length > 0)) {
        array = [0];
        return array;
      } else return array;
    }
    const reducer = (prev, curr) => prev + curr;
    return (
      (emptyArrayToZero(nums1).reduce(reducer) + emptyArrayToZero(nums2).reduce(reducer)) /
      (nums1.length + nums2.length)
    );
  }
}
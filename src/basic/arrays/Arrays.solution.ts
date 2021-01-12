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
    return values.map((x) => {
      if (x % 2 === 0) {
        x *= 2;
      }
      return x;
    });
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
    return values.sort(function (a, b) {
      if (a.toLowerCase() < b.toLowerCase()) {
        // return -1;

        //tenäre operatoren
        return ascendingOrder ? -1 : 1;
      }
      if (a.toLowerCase() > b.toLowerCase()) {
        return ascendingOrder ? 1 : -1;
      }
      return 0;
    });
  }

  /**
   * returns a new array with the same items but in ascending order of the given property
   */
  public static sortObjects2(values: any[], property: string): any[] {
    if (property === "age") {
      return values.sort(function (x, y) {
        return x.age - y.age;
      });
    }
    if (property === "name") {
      return values.sort(function (a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
  }

  public static sortObjects(values: any[], property: string): any[] {
    return values.sort((a, b) => {
      if (property === "age") {
        return a.age - b.age;
      }
      if (property === "name") {
        return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : a.name.toLowerCase() > b.name.toLowerCase() ? 1 : 0;
      }
    });
  }

  /**
   * returns true when a and b are identical.
   */
  public static equals(a: any[], b: any[]): boolean {
    for (let i = 1; i <= a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * returns true when a and b contains the same items, even tough the order is not the same.
   */
  public static similar(a: any[], b: any[]): boolean {
    if (a.length !== b.length) {
      return false;
    }

    const aInB = a.reduce((result, value) => result && b.includes(value), true);
    const bInA = b.reduce((result, value) => result && a.includes(value), true);
    return aInB && bInA;
  }

  public static similar2(a: any[], b: any[]): boolean {
    function sortArray(inputArray) {
      if (typeof a[0] !== "number") {
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
    //funktion nachbauen
    return array.map(fn);
  }

  /**
   * should reduce a array to a single value by the help of a function and one initial value
   */
  public static reduce<T, R>(array: T[], fn: (accu: R, item: T, index?: number) => R, initial: R): R {
    //funktion nachbauen
    return array.reduce(fn, initial);
  }

  /**
   * should find the median of the combination of 2 sorted arrays.
   * @difficulty: medium-hard
   */
  public static findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const reducer = (sum, curr) => sum + curr;
    const totalLength = nums1.length + nums2.length;
    const totalSum = nums1.reduce(reducer, 0) + nums2.reduce(reducer, 0);
    return totalSum / totalLength;
  }
}

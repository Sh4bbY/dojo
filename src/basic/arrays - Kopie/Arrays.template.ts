import {StaticInterface} from '../../util/static.decorator';
import {ArraysInterface} from './Arrays.interface';


@StaticInterface<ArraysInterface>()
export class Arrays {
  /**
   * returns true if a given value is an Array
   */
  public static isArray(value: any): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array that combines a and b
   */
  public static merge(a: any[], b: any[]): any[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array where all odd numbers are removed
   */
  public static removeOddNumbers(values: number[]): number[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array where all numbers are be multiplied by 2
   */
  public static duplicate(values: number[]): number[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array where all even numbers are be multiplied by 2
   */
  public static duplicateEven(values: number[]): number[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array with the same items in ascending order
   */
  public static sortNumberASC(values: number[]): number[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array with the same items in given order
   */
  public static sortStrings(values: string[], ascendingOrder = true): string[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns a new array with the same items but in ascending order of the given property
   */
  public static sortObjects(values: any[], property: string): any[] {
    throw new Error('Not yet implemented');
  }

  /**
   * returns true when a and b are identical.
   */
  public static equals(a: any[], b: any[]): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * returns true when a and b contains the same items, even tough the order is not the same.
   */
  public static similar(a: any[], b: any[]): boolean {
    throw new Error('Not yet implemented');
  }

  /**
   * should apply a function to every array-item and return the transformed array
   */
  public static map<T>(array: T[], fn: (item: T) => T): T[] {
    throw new Error('Not yet implemented');
  }

  /**
   * should reduce a array to a single value by the help of a function and one initial value
   */
  public static reduce<T, R>(array: T[], fn: (accu: R, item: T, index?: number) => R, initial: R): R {
    throw new Error('Not yet implemented');
  }

  /**
   * should find the median of the combination of 2 sorted arrays.
   * @difficulty: medium-hard
   */
  public static findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    throw new Error('Not yet implemented');
  };
}

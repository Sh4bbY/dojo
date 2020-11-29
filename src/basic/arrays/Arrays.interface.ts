export interface ArraysInterface {
  isArray(value: any): boolean;

  merge(a: any[], b: any[]): any[];

  removeOddNumbers(values: number[]): number[];

  duplicate(values: number[]): number[];

  duplicateEven(values: number[]): number[];

  sortNumberASC(values: number[]): number[];

  sortStrings(values: string[], ascendingOrder: boolean): string[];

  sortObjects(values: any[], property: string): any[];

  equals(a: any[], b: any[]): boolean;

  similar(a: any[], b: any[]): boolean;

  map<T>(array: T[], fn: (item: T) => T): T[];

  reduce<T, R>(array: T[], fn: (accu: R, item: T, index?: number) => R, initial: R): R;

  findMedianSortedArrays(nums1: number[], nums2: number[]): number;
}


export interface ObjectsInterface {
  isPlainObject(obj: any): boolean;

  getKeys(obj: any): string[];

  getValues(obj: any): any[];

  merge(a: any, b: any): any;

  equals(a: any, b: any): boolean;

  deepEquals(a: any, b: any): boolean;
}

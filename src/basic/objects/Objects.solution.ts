import { StaticInterface } from "../../util/static.decorator";
import { ObjectsInterface } from "./Objects.interface";

@StaticInterface<ObjectsInterface>()
export class Objects {
  /**
   * returns true when a given value is of type Object
   * it should return false, if the value is an Array, Date, null, string, or number.
   */
  public static isPlainObject(value: any): boolean {

    if(value != null) {
      return typeof value === "object";
    }
    else return false;
  }

  /**
   * returns all keys of a given object as array of strings
   */
  public static getKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  /**
   * returns all values of a given object as array
   */
  public static getValues(obj: any): any[] {
    return Object.values(obj);
  }

  /**
   * returns a new objects that is a merge of a and b (b is allowed overrule a properties).
   * a and b should not be changed!
   */
  public static merge(a: any, b: any): any {
    return { ...a, ...b };
  }

  /**
   * return true when 2 simple objects a and b are equal
   */
  public static equals(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
    throw new Error("Not yet implemented");
  }

  /**
   * return true when 2 nested objects a and b are deeply equal
   */
  public static deepEquals(a: any, b: any): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
  }
}

import {CalculatorInterface} from './Calculator.interface';

export class Calculator implements CalculatorInterface {

  press(value: string) {
    return value;
  }

  calculate(input?: string): number {
    return eval(input);
  }

  private static createTerms(input) {
    throw new Error('Not yet implemented');
  }

  private static resolve(operation: string, a: number, b: number): number {
    return eval(a + operation + b);
  }

  private static isOperation(char: string): boolean {
    return eval(1 + char + 1) < 3;
  }

  private static isNumber(char: string): boolean {
    return typeof Number(char) === "number";
  }

  private static isValidInput(char: string): boolean {

    //regexp?
    throw new Error('Not yet implemented');
  }
}

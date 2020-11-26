import {CalculatorInterface} from './Calculator.interface';

export class Calculator implements CalculatorInterface {

  press(value: string) {
    throw new Error('Not yet implemented');
  }

  calculate(input?: string): number {
    throw new Error('Not yet implemented');
  }

  private static createTerms(input) {
    throw new Error('Not yet implemented');
  }

  private static resolve(operation: string, a: number, b: number): number {
    throw new Error('Not yet implemented');
  }

  private static isOperation(char: string): boolean {
    throw new Error('Not yet implemented');
  }

  private static isNumber(char: string): boolean {
    throw new Error('Not yet implemented');
  }

  private static isValidInput(char: string): boolean {
    throw new Error('Not yet implemented');
  }
}

export interface CalculatorInterface {
  press(value: string): void;

  calculate(input?: string): number;
}

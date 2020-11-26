Calculator
==========

The goal of this kata is to implement a simple Calculator.
If a button is pressed and the value is valid, it should be appended to the calculators input ( valid values are: 0123456789+-*/ ).
when the calculate function gets called, the calculate should calculate the output for the given input.

To get started copy a new file `Calculator.template.ts` and create a class `Calculator` that implements the `CalculatorInterface`.

```bash
cp src/advanced/calculator.template.ts src/advanced/calculator.solution.ts
```


Example:

```typescript
// Calculator.solution.ts
import CalculatorInterface from './Calculator.interface.ts';

export class Calculator implements CalculatorInterface {
   // your implementation goes here
}
```

To run only this particular test-suite, execute:

```bash
yarn jest src/advanced/calculator
```

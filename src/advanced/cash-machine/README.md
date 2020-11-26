Cash Machine
============

The goal of this kata is to implement a Cash-Machine.
The CashMachine will be initialized with a set of customer accounts and a cash stock.
Users should than be able to login to the machine, withdraw some money, check his account balance, and logout again.
Of course the Machine needs to keep track of the cash.

To get started create a new file `CashMachine.solution.ts` and in that file create a class `CashMachine` that extends the `AbstractSodaMachine`.

Example:

```typescript
// CashMachine.solution.ts
import AbstractCashMachine from './AbstractCashMachine.ts';

export class CashMachine extends AbstractCashMachine {
   // your implementation goes here
}
```

To run only this particular test-suite, execute:

```bash
yarn test src/advanced/02-cash-machine
```

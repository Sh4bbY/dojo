Soda Machine
============

The goal of this kata is to implement a Soda-Machine.
A user should be able to insert coins, select a drink, and get overpaid cash back.
The machine should also keep track of its stock. so that a User cannot select a drink, that is already sold out.
And of course the machine needs to keep track of its coins.

To get started create a new class SodaMachine that extends the AbstractSodaMachine in file `SodaMachine.solution.ts`.04

Example:

```typescript
import AbstractSodaMachine from './AbstractSodaMachine.ts';

export class SodaMachine extends AbstractSodaMachine {
   // your implementation goes here
}
```

to run the test-suite only for that particular kata, you can execute
```bash
yarn test src/object-orientation/01-soda-machine
```

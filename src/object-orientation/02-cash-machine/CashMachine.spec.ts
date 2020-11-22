import {CashMachine} from './CashMachine.solution';

describe('CashMachine', () => {
  const cashMachine = new CashMachine({
    stock: {
      5: 100,
      10: 200,
      20: 200,
      50: 100,
      100: 100,
      200: 100,
      500: 50,
    },
    accounts: [
      {id: 1, pin: 1234, balance: 1000},
      {id: 2, pin: 4567, balance: 20},
      {id: 1, pin: 4321, balance: -20},
    ],
  });

  it('should allow to a customer to login', () => {
    cashMachine.login(1, 1234);
    // TODO: add tests
    // cashMachine.getBalance();
    // cashMachine.withdraw(100);
    // cashMachine.getBalance();
    // cashMachine.logout();

    // expect(calc.result).toBe(2);
  });
});


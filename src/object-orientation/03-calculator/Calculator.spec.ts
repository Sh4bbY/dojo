import {Calculator} from './Calculator.solution';

describe('Calculator', () => {
  const calc = new Calculator();

  describe('calculate', () => {
    it('should show numbers', () => {
      expect(calc.calculate('1')).toBe(1);
    });

    it('should add numbers', () => {
      expect(calc.calculate('1+2')).toBe(3);
      expect(calc.calculate('100+50')).toBe(150);
      expect(calc.calculate('1+2+3')).toBe(6);
      expect(calc.calculate('1+2+3+4')).toBe(10);
    });

    it('should subtract numbers', () => {
      expect(calc.calculate('1-2')).toBe(-1);
      expect(calc.calculate('100-50')).toBe(50);
      // expect(calc.calculate('1-2-3')).toBe(-4);
      // expect(calc.calculate('1-2-3-4')).toBe(-8);
    });

    it('should multiply numbers', () => {
      expect(calc.calculate('1*2')).toBe(2);
      expect(calc.calculate('100*50')).toBe(5000);
      expect(calc.calculate('1*2*3')).toBe(6);
      expect(calc.calculate('1*2*3*4')).toBe(24);
    });

    it('should divide numbers', () => {
      expect(calc.calculate('1/2')).toBe(0.5);
    });
  });

});


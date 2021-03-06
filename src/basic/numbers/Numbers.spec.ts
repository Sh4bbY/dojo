import {Numbers} from './Numbers.solution';

describe('Numbers', () => {

  describe('sumOfTwo', () => {
    it('should add 2 numbers', () => {
      expect(Numbers.sumOfTwo(1, 2)).toBe(3);
    });
  });

  describe('sumOfMany', () => {
    it('should add n numbers', () => {
      expect(Numbers.sumOfMany(1)).toBe(1);
      expect(Numbers.sumOfMany(1, 2)).toBe(3);
      expect(Numbers.sumOfMany(1, 2, 3, 4, 5, 6, 7)).toBe(28);
      expect(Numbers.sumOfMany(5, 5, 5, 5, 5)).toBe(25);
    });
  });

  describe('isNumber', () => {
    it('should return true if value is a number', () => {
      expect(Numbers.isNumber(0)).toBe(true);
      expect(Numbers.isNumber(123)).toBe(true);
      expect(Numbers.isNumber(Number.NaN)).toBe(true);
      expect(Numbers.isNumber(Number.MAX_VALUE)).toBe(true);
    });

    it('should return false if value is not a number', () => {
      expect(Numbers.isNumber(undefined)).toBe(false);
      expect(Numbers.isNumber(null)).toBe(false);
      expect(Numbers.isNumber({})).toBe(false);
      expect(Numbers.isNumber('123')).toBe(false);
      expect(Numbers.isNumber('A')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('should return true if value is numeric', () => {
      expect(Numbers.isNumeric(0)).toBe(true);
      expect(Numbers.isNumeric(123)).toBe(true);
      expect(Numbers.isNumeric('123')).toBe(true);
      expect(Numbers.isNumeric('-123')).toBe(true);
      expect(Numbers.isNumeric(Number.MAX_VALUE)).toBe(true);
    });

    it('should return false if value is not numeric', () => {
      expect(Numbers.isNumeric(undefined)).toBe(false);
      expect(Numbers.isNumeric(null)).toBe(false);
      expect(Numbers.isNumeric({})).toBe(false);
      expect(Numbers.isNumeric('A')).toBe(false);
      expect(Numbers.isNumeric(Number.NaN)).toBe(false);
    });
  });

  describe('isDividableBy', () => {
    it('should return true if the first argument is dividable by the second argument', () => {
      expect(Numbers.isDividableBy(10, 5)).toBe(true);
      expect(Numbers.isDividableBy(7956, 34)).toBe(true);
      expect(Numbers.isDividableBy(827115, 12345)).toBe(true);
      expect(Numbers.isDividableBy(-10, 5)).toBe(true);
      expect(Numbers.isDividableBy(10, -5)).toBe(true);
      expect(Numbers.isDividableBy(1, 0.5)).toBe(true);
    });

    it('should return false if the first argument is not dividable by the second argument', () => {
      expect(Numbers.isDividableBy(10, 3)).toBe(false);
      expect(Numbers.isDividableBy(7956, 35)).toBe(false);
      expect(Numbers.isDividableBy(7956, null)).toBe(false);
      expect(Numbers.isDividableBy(null, 0)).toBe(false);
    });
  });

  describe('isOddNumber', () => {
    it('should return true if the first argument is a odd number', () => {
      expect(Numbers.isOddNumber(11)).toBe(true);
      expect(Numbers.isOddNumber(12345)).toBe(true);
    });

    it('should return true if the first argument is a odd number', () => {
      expect(Numbers.isOddNumber(10)).toBe(false);
      expect(Numbers.isOddNumber(123456)).toBe(false);
    });
  });

  describe('faculty', () => {
    it('should return the faculty of a given number', () => {
      expect(Numbers.faculty(5)).toBe(120);
      expect(Numbers.faculty(10)).toBe(3628800);
      expect(Numbers.faculty(20)).toBe(2432902008176640000);
    });
  });

  describe('fibonacci', () => {
    it('should return the first N fibonacci numbers', () => {
      expect(Numbers.fibonacci(5)).toStrictEqual([1, 1, 2, 3, 5]);
      expect(Numbers.fibonacci(10)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
      expect(Numbers.fibonacci(20)).toStrictEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]);
    });
  });

  describe('readBinaryString', () => {
    it('should read a binary string and return the decimal number', () => {
      expect(Numbers.readBinaryString('')).toBe(0);
      expect(Numbers.readBinaryString('1')).toBe(1);
      expect(Numbers.readBinaryString('0000')).toBe(0);
      expect(Numbers.readBinaryString('0111')).toBe(7);
      expect(Numbers.readBinaryString('01111011')).toBe(123);
      expect(Numbers.readBinaryString('1000101011')).toBe(555);
      expect(Numbers.readBinaryString('11000000111001')).toBe(12345);
    });
  });

  describe('getBinaryString', () => {
    it('should return the binary representation of a given decimal number', () => {
      expect(Numbers.getBinaryString(1)).toBe('1');
      expect(Numbers.getBinaryString(0)).toBe('0');
      expect(Numbers.getBinaryString(7)).toBe('111');
      expect(Numbers.getBinaryString(123)).toBe('1111011');
      expect(Numbers.getBinaryString(555)).toBe('1000101011');
      expect(Numbers.getBinaryString(12345)).toBe('11000000111001');
    });
  });

});


const numbers = require(useSolution ? './numbers.solution' : './numbers');

describe('numbers', () => {

  describe('sumOfTwo', () => {
    it('should add 2 numbers', () => {
      expect(numbers.sumOfTwo(1, 2)).toBe(3);
    });
  });

  describe('sumOfMany', () => {
    it('should add n numbers', () => {
      expect(numbers.sumOfMany(1)).toBe(1);
      expect(numbers.sumOfMany(1, 2)).toBe(3);
      expect(numbers.sumOfMany(1, 2, 3, 4, 5, 6, 7)).toBe(28);
      expect(numbers.sumOfMany(5, 5, 5, 5, 5)).toBe(25);
    });
  });

  describe('isNumber', () => {
    it('should return true if value is a number', () => {
      expect(numbers.isNumber(0)).toBe(true);
      expect(numbers.isNumber(123)).toBe(true);
      expect(numbers.isNumber(Number.NaN)).toBe(true);
      expect(numbers.isNumber(Number.MAX_VALUE)).toBe(true);
    });

    it('should return false if value is not a number', () => {
      expect(numbers.isNumber(undefined)).toBe(false);
      expect(numbers.isNumber(null)).toBe(false);
      expect(numbers.isNumber({})).toBe(false);
      expect(numbers.isNumber('123')).toBe(false);
      expect(numbers.isNumber('A')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('should return true if value is numeric', () => {
      expect(numbers.isNumeric(0)).toBe(true);
      expect(numbers.isNumeric(123)).toBe(true);
      expect(numbers.isNumeric('123')).toBe(true);
      expect(numbers.isNumeric('-123')).toBe(true);
      expect(numbers.isNumeric(Number.MAX_VALUE)).toBe(true);
    });

    it('should return false if value is not numeric', () => {
      expect(numbers.isNumeric(undefined)).toBe(false);
      expect(numbers.isNumeric(null)).toBe(false);
      expect(numbers.isNumeric({})).toBe(false);
      expect(numbers.isNumeric('A')).toBe(false);
      expect(numbers.isNumeric(Number.NaN)).toBe(false);
    });
  });

  describe('isDividableBy', () => {
    it('should return true if the first argument is dividable by the second argument', () => {
      expect(numbers.isDividableBy(10, 5)).toBe(true);
      expect(numbers.isDividableBy(7956, 34)).toBe(true);
      expect(numbers.isDividableBy(827115, 12345)).toBe(true);
      expect(numbers.isDividableBy(-10, 5)).toBe(true);
      expect(numbers.isDividableBy(10, -5)).toBe(true);
      expect(numbers.isDividableBy(1, 0.5)).toBe(true);
    });

    it('should return false if the first argument is not dividable by the second argument', () => {
      expect(numbers.isDividableBy(10, 3)).toBe(false);
      expect(numbers.isDividableBy(7956, 35)).toBe(false);
      expect(numbers.isDividableBy(7956, 'wtf')).toBe(false);
      expect(numbers.isDividableBy(null, 'asd')).toBe(false);
    });
  });

  describe('isOddNumber', () => {
    it('should return true if the first argument is a odd number', () => {
      expect(numbers.isOddNumber(11)).toBe(true);
      expect(numbers.isOddNumber(12345)).toBe(true);
    });

    it('should return true if the first argument is a odd number', () => {
      expect(numbers.isOddNumber(10)).toBe(false);
      expect(numbers.isOddNumber(123456)).toBe(false);
    });
  });

  describe('faculty', () => {
    it('should return the faculty of a given number', () => {
      expect(numbers.faculty(5)).toBe(120);
      expect(numbers.faculty(10)).toBe(3628800);
      expect(numbers.faculty(20)).toBe(2432902008176640000);
    });
  });

});


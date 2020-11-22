import * as arrays from './arrays.solution';

describe('arrays', () => {

  describe('isArray', () => {
    it('should return true if a given value is of type array', () => {
      expect(arrays.isArray([1, 2])).toBe(true);
      expect(arrays.isArray(['a', 'b'])).toBe(true);
      expect(arrays.isArray([])).toBe(true);
    });
    it('should return false if a given value is not of type array', () => {
      expect(arrays.isArray(null)).toBe(false);
      expect(arrays.isArray(1)).toBe(false);
      expect(arrays.isArray('abc')).toBe(false);
      expect(arrays.isArray({})).toBe(false);
    });
  });

  describe('merge', () => {
    it('should merge 2 array together', () => {
      expect(arrays.merge([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
      expect(arrays.merge(['abc'], ['def', 'ghi'])).toStrictEqual(['abc', 'def', 'ghi']);
    });
  });

  describe('removeOddNumbers', () => {
    it('should remove all numbers in the array that are not even', () => {
      expect(arrays.removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([2, 4, 6, 8, 10]);
      expect(arrays.removeOddNumbers([1, 3, 5, 7])).toStrictEqual([]);
      expect(arrays.removeOddNumbers([22, 44, 66, 77])).toStrictEqual([22, 44, 66]);
    });
  });

  describe('duplicate', () => {
    it('should multiply all values in the array by 2', () => {
      expect(arrays.duplicate([1, 2, 3, 4, 5])).toStrictEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('duplicateEven', () => {
    it('should multiply all even values in the array by 2', () => {
      expect(arrays.duplicateEven([1, 2, 3, 4, 5])).toStrictEqual([1, 4, 3, 8, 5]);
    });
  });

  describe('sortNumberASC', () => {
    it('should sort numbers in ascending order', () => {
      expect(arrays.sortNumberASC([2, 24, 8, 1, 23, 4, 100, 0, 33, 77])).toStrictEqual([0, 1, 2, 4, 8, 23, 24, 33, 77, 100]);
    });
  });

  describe('sortStrings', () => {
    it('should sort string in a given order', () => {
      expect(arrays.sortStrings(['A', 'b', 'Z', 'x', 'K', 'H'], true)).toStrictEqual(['A', 'b', 'H', 'K', 'x', 'Z']);
      expect(arrays.sortStrings(['A', 'b', 'Z', 'x', 'K', 'H'], false)).toStrictEqual(['Z', 'x', 'K', 'H', 'b', 'A']);
    });
  });

  describe('sortObjects', () => {
    const objects = [
      {name: 'John', age: 48},
      {name: 'Zoe', age: 9},
      {name: 'Jane', age: 23},
      {name: 'Benny', age: 34},
      {name: 'Chris', age: 22},
    ];

    it('should sort objects in ascending order by a given property', () => {
      expect(arrays.sortObjects(objects, 'name').map((obj: any) => obj.name)).toStrictEqual(['Benny', 'Chris', 'Jane', 'John', 'Zoe']);
      expect(arrays.sortObjects(objects, 'age').map((obj: any) => obj.name)).toStrictEqual(['Zoe', 'Chris', 'Jane', 'Benny', 'John']);
    });
  });

  describe('equals', () => {
    it('should return true, when both arrays are equal', () => {
      expect(arrays.equals([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
      expect(arrays.equals(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
      expect(arrays.equals([], [])).toBe(true);
    });
    it('should return false, when both arrays are not equal', () => {
      expect(arrays.equals([1, 2, 3, 4], [4, 3, 2, 1])).toBe(false);
      expect(arrays.equals(['a', 'b', 'c'], ['b', 'c', 'a'])).toBe(false);
      expect(arrays.equals([1, 2, 3], [1, 2, 3, 4])).toBe(false);
      expect(arrays.equals([1, 2, 3, 4], [1, 2, 3])).toBe(false);
    });
  });

  describe('similar', () => {
    it('should return true, when both arrays contain the same values', () => {
      expect(arrays.similar([1, 2, 3, 4], [4, 3, 2, 1])).toBe(true);
      expect(arrays.similar(['a', 'b', 'c'], ['b', 'c', 'a'])).toBe(true);
    });
  });

});


import {ArraysInterface} from './Arrays.interface';

const Arrays: ArraysInterface = require(useSolution ? './Arrays.solution' : './Arrays.template').Arrays;

describe('Arrays', () => {

  describe('isArray', () => {
    it('should return true if a given value is of type array', () => {
      expect(Arrays.isArray([1, 2])).toBe(true);
      expect(Arrays.isArray(['a', 'b'])).toBe(true);
      expect(Arrays.isArray([])).toBe(true);
    });
    it('should return false if a given value is not of type array', () => {
      expect(Arrays.isArray(null)).toBe(false);
      expect(Arrays.isArray(1)).toBe(false);
      expect(Arrays.isArray('abc')).toBe(false);
      expect(Arrays.isArray({})).toBe(false);
    });
  });

  describe('merge', () => {
    it('should merge 2 array together', () => {
      expect(Arrays.merge([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
      expect(Arrays.merge(['abc'], ['def', 'ghi'])).toStrictEqual(['abc', 'def', 'ghi']);
    });
  });

  describe('removeOddNumbers', () => {
    it('should remove all numbers in the array that are not even', () => {
      expect(Arrays.removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toStrictEqual([2, 4, 6, 8, 10]);
      expect(Arrays.removeOddNumbers([1, 3, 5, 7])).toStrictEqual([]);
      expect(Arrays.removeOddNumbers([22, 44, 66, 77])).toStrictEqual([22, 44, 66]);
    });
  });

  describe('duplicate', () => {
    it('should multiply all values in the array by 2', () => {
      expect(Arrays.duplicate([1, 2, 3, 4, 5])).toStrictEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('duplicateEven', () => {
    it('should multiply all even values in the array by 2', () => {
      expect(Arrays.duplicateEven([1, 2, 3, 4, 5])).toStrictEqual([1, 4, 3, 8, 5]);
    });
  });

  describe('sortNumberASC', () => {
    it('should sort numbers in ascending order', () => {
      expect(Arrays.sortNumberASC([2, 24, 8, 1, 23, 4, 100, 0, 33, 77])).toStrictEqual([0, 1, 2, 4, 8, 23, 24, 33, 77, 100]);
    });
  });

  describe('sortStrings', () => {
    it('should sort string in a given order', () => {
      expect(Arrays.sortStrings(['A', 'b', 'Z', 'x', 'K', 'H'], true)).toStrictEqual(['A', 'b', 'H', 'K', 'x', 'Z']);
      expect(Arrays.sortStrings(['A', 'b', 'Z', 'x', 'K', 'H'], false)).toStrictEqual(['Z', 'x', 'K', 'H', 'b', 'A']);
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
      expect(Arrays.sortObjects(objects, 'name').map((obj: any) => obj.name)).toStrictEqual(['Benny', 'Chris', 'Jane', 'John', 'Zoe']);
      expect(Arrays.sortObjects(objects, 'age').map((obj: any) => obj.name)).toStrictEqual(['Zoe', 'Chris', 'Jane', 'Benny', 'John']);
    });
  });

  describe('equals', () => {
    it('should return true, when both arrays are equal', () => {
      expect(Arrays.equals([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
      expect(Arrays.equals(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
      expect(Arrays.equals([], [])).toBe(true);
    });
    it('should return false, when both arrays are not equal', () => {
      expect(Arrays.equals([1, 2, 3, 4], [4, 3, 2, 1])).toBe(false);
      expect(Arrays.equals(['a', 'b', 'c'], ['b', 'c', 'a'])).toBe(false);
      expect(Arrays.equals([1, 2, 3], [1, 2, 3, 4])).toBe(false);
      expect(Arrays.equals([1, 2, 3, 4], [1, 2, 3])).toBe(false);
    });
  });

  describe('similar', () => {
    it('should return true, when both arrays contain the same values', () => {
      expect(Arrays.similar([1, 2, 3, 4], [4, 3, 2, 1])).toBe(true);
      expect(Arrays.similar(['a', 'b', 'c'], ['b', 'c', 'a'])).toBe(true);
    });
  });

  describe('map', () => {
    it('should apply a function to every array-item and return the transformed array', () => {
      expect(Arrays.map([1, 2, 3, 4], n => n * 10)).toStrictEqual([10, 20, 30, 40]);
      expect(Arrays.map(['a', 'b', 'c'], c => c + '!')).toStrictEqual(['a!', 'b!', 'c!']);
    });
  });

  describe('reduce', () => {
    it('should reduce a array to a single value by the help of a function and one initial value', () => {
      expect(Arrays.reduce([1, 2, 3, 4], (sum, n) => sum + n, 0)).toBe(10);
      expect(Arrays.reduce(['a', 'b', 'c'], (str, c) => str + c + '!', '')).toBe('a!b!c!');
      expect(Arrays.reduce(['abc', 'def', 'ghi'], (count, str) => count + str.length, 0)).toBe(9);
      expect(Arrays.reduce(['propA', 'probB'], (obj, prop, index) => {
        obj[prop] = index * 5;
        return obj;
      }, {})).toStrictEqual({propA: 0, probB: 5});
    });
  });

});


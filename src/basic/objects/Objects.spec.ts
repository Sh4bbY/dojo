import {Objects} from './Objects.solution';

describe('Objects', () => {

  xdescribe('isPlainObject', () => {
    it('should return true if a given value is a plain object', () => {
      expect(Objects.isPlainObject({})).toBe(true);
      expect(Objects.isPlainObject({a: 1, b: 2})).toBe(true);
    });

    it('should return false if a given value is not plain object', () => {
      expect(Objects.isPlainObject(null)).toBe(false);
      expect(Objects.isPlainObject(1)).toBe(false);
      expect(Objects.isPlainObject('abc')).toBe(false);
      expect(Objects.isPlainObject([])).toBe(false);
      expect(Objects.isPlainObject(new Date())).toBe(false);
    });
  });

  xdescribe('getKeys', () => {
    it('should return all object keys as array of strings', () => {
      expect(Objects.getKeys({a: 1, b: 2, c: 3})).toStrictEqual(['a', 'b', 'c']);
    });
  });

  xdescribe('getValues', () => {
    it('should return all object values in an array', () => {
      expect(Objects.getValues({a: 1, b: 2, c: 3})).toStrictEqual([1, 2, 3]);
    });
  });

  xdescribe('merge', () => {
    it('should merge two object together', () => {
      const objA = {a: 1, b: 2};
      const objB = {c: 3, d: 4};
      expect(Objects.merge(objA, objB)).toStrictEqual({a: 1, b: 2, c: 3, d: 4});
    });

    it('if keys are equal, the property of the second object should overwrite the property of the first object', () => {
      const objA = {a: 1, b: 2};
      const objB = {b: 3, c: 4};
      expect(Objects.merge(objA, objB)).toStrictEqual({a: 1, b: 3, c: 4});
    });

    it('should not modify the source objects', () => {
      const objA = {a: 1, b: 2};
      const objB = {b: 3, c: 4};
      const objAClone = Object.assign({}, objA);
      const objBClone = Object.assign({}, objB);
      expect(Objects.merge(objA, objB)).toStrictEqual({a: 1, b: 3, c: 4});
      expect(objA).toStrictEqual(objAClone);
      expect(objB).toStrictEqual(objBClone);
    });
  });

  describe('equals', () => {
    it('should return true, when both objects are equal', () => {
      expect(Objects.equals({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3})).toBe(true);
    });

    it('should return false, when both objects are not equal', () => {
      expect(Objects.equals({a: 1, b: 2}, {a: 1, b: 2, c: 3})).toBe(false);
      expect(Objects.equals({a: 1, b: 2, c: 3}, {b: 2, c: 3})).toBe(false);
      expect(Objects.equals({a: 1, b: 2, c: 3}, {a: 2, b: 2, c: 3})).toBe(false);
      expect(Objects.equals({a: 1, b: 2, c: 3}, {a: 2, b: 3, c: 4})).toBe(false);
      expect(Objects.equals({a: 1, b: 2, c: 3}, {c: 1, b: 2, a: 3})).toBe(false);

      // False Positives:
      expect(Objects.equals({a: 1, b: [1, 2]}, {a: 1, b: [1, 2]})).toBe(false);  // Note: should be true! deepEquals for the rescue
    });
  });

  describe('deepEquals', () => {
    it('should return true, when both objects are deep equal', () => {
      expect(Objects.deepEquals({a: 1, b: [1, 2]}, {a: 1, b: [1, 2]})).toBe(true);
      expect(Objects.deepEquals({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 2, 3]}}})).toBe(true);
    });

    it('should return false, when both objects are not deep equal', () => {
      expect(Objects.deepEquals({a: 1, b: [1, 2]}, {a: 1, b: [1, 3]})).toBe(false);
      expect(Objects.deepEquals({a: {b: {c: [1, 2, 3]}}}, {a: {c: {c: [1, 2, 3]}}})).toBe(false);
      expect(Objects.deepEquals({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 3, 2]}}})).toBe(false);
    });
  });

});


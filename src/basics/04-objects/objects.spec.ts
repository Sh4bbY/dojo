const objects = require(useSolution ? './objects.solution' : './objects');

describe('objects', () => {

  describe('isPlainObject', () => {
    it('should return true if a given value is a plain object', () => {
      expect(objects.isPlainObject({})).toBe(true);
      expect(objects.isPlainObject({a: 1, b: 2})).toBe(true);
    });
    it('should return false if a given value is not plain object', () => {
      expect(objects.isPlainObject(null)).toBe(false);
      expect(objects.isPlainObject(1)).toBe(false);
      expect(objects.isPlainObject('abc')).toBe(false);
      expect(objects.isPlainObject([])).toBe(false);
      expect(objects.isPlainObject(new Date())).toBe(false);
    });
  });

  describe('getKeys', () => {
    it('should return all object keys as array of strings', () => {
      expect(objects.getKeys({a: 1, b: 2, c: 3})).toStrictEqual(['a', 'b', 'c']);
    });
  });

  describe('getValues', () => {
    it('should return all object values in an array', () => {
      expect(objects.getValues({a: 1, b: 2, c: 3})).toStrictEqual([1, 2, 3]);
    });
  });

  describe('merge', () => {
    it('should merge two object together', () => {
      const objA = {a: 1, b: 2};
      const objB = {c: 3, d: 4};
      expect(objects.merge(objA, objB)).toStrictEqual({a: 1, b: 2, c: 3, d: 4});
    });

    it('if keys are equal, the property of the second object should overwrite the property of the first object', () => {
      const objA = {a: 1, b: 2};
      const objB = {b: 3, c: 4};
      expect(objects.merge(objA, objB)).toStrictEqual({a: 1, b: 3, c: 4});
    });

    it('should not modify the source objects', () => {
      const objA = {a: 1, b: 2};
      const objB = {b: 3, c: 4};
      const objAClone = Object.assign({}, objA);
      const objBClone = Object.assign({}, objB);
      expect(objects.merge(objA, objB)).toStrictEqual({a: 1, b: 3, c: 4});
      expect(objA).toStrictEqual(objAClone);
      expect(objB).toStrictEqual(objBClone);
    });
  });

  describe('equals', () => {
    it('should return true, when both objects are equal', () => {
      expect(objects.equals({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3})).toBe(true);
    });

    it('should return false, when both objects are not equal', () => {
      expect(objects.equals({a: 1, b: 2}, {a: 1, b: 2, c: 3})).toBe(false);
      expect(objects.equals({a: 1, b: 2, c: 3}, {b: 2, c: 3})).toBe(false);
      expect(objects.equals({a: 1, b: 2, c: 3}, {a: 2, b: 2, c: 3})).toBe(false);
      expect(objects.equals({a: 1, b: 2, c: 3}, {a: 2, b: 3, c: 4})).toBe(false);
      expect(objects.equals({a: 1, b: 2, c: 3}, {c: 1, b: 2, a: 3})).toBe(false);

      // False Positives:
      expect(objects.equals({a: 1, b: [1, 2]}, {a: 1, b: [1, 2]})).toBe(false);  // Note: should be true! deepEquals for the rescue
    });
  });

  describe('deepEquals', () => {
    it('should return true, when both objects are deep equal', () => {
      expect(objects.deepEquals({a: 1, b: [1, 2]}, {a: 1, b: [1, 2]})).toBe(true);
      expect(objects.deepEquals({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 2, 3]}}})).toBe(true);
    });

    it('should return false, when both objects are not deep equal', () => {
      expect(objects.deepEquals({a: 1, b: [1, 2]}, {a: 1, b: [1, 3]})).toBe(false);
      expect(objects.deepEquals({a: {b: {c: [1, 2, 3]}}}, {a: {c: {c: [1, 2, 3]}}})).toBe(false);
      expect(objects.deepEquals({a: {b: {c: [1, 2, 3]}}}, {a: {b: {c: [1, 3, 2]}}})).toBe(false);
    });
  });

});


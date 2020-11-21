const arrays = require(useSolution ? './arrays.solution' : './arrays');

xdescribe('arrays', () => {

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

});


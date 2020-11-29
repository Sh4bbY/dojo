import {Sorting} from './Sorting.solution';

describe('Sorting', () => {

  describe('bubbleSort', () => {
    it('should sort the given array with bubbleSort', () => {
      const arr = [5, 3, 1, 5, 9, 4, 7, 33, 32, 11, 98, 75, 10];
      expect(Sorting.bubbleSort(arr)).toStrictEqual([1, 3, 4, 5, 5, 7, 9, 10, 11, 32, 33, 75, 98]);
    });
  });

  describe('selectionSort', () => {
    it('should sort the given array with selectionSort', () => {
      const arr = [5, 3, 1, 5, 9, 4, 7, 33, 32, 11, 98, 75, 10];
      expect(Sorting.selectionSort(arr)).toStrictEqual([1, 3, 4, 5, 5, 7, 9, 10, 11, 32, 33, 75, 98]);
    });
  });

  describe('insertionSort', () => {
    it('should sort the given array with insertionSort', () => {
      const arr = [5, 3, 1, 5, 9, 4, 7, 33, 32, 11, 98, 75, 10];
      expect(Sorting.insertionSort(arr)).toStrictEqual([1, 3, 4, 5, 5, 7, 9, 10, 11, 32, 33, 75, 98]);
    });
  });

  describe('quickSort', () => {
    it('should sort the given array with quickSort', () => {
      const arr = [5, 3, 1, 5, 9, 4, 7, 33, 32, 11, 98, 75, 10];
      expect(Sorting.quickSort(arr)).toStrictEqual([1, 3, 4, 5, 5, 7, 9, 10, 11, 32, 33, 75, 98]);
    });
  });

});


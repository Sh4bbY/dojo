import {BinarySearchTree} from './BinarySearchTree.solution';

describe('BinarySearchTree', () => {
  it('should be able to construct a binary search tree and traverse it with breadth first search', () => {
    const bst = new BinarySearchTree<number>();
    const items = [4, 2, 6, 1, 3, 6, 5, 7];
    items.forEach(item => bst.add(item));
    expect(bst.traverseBFS()).toStrictEqual([4, 2, 6, 1, 3, 5, 7]);
  });

  it('should be able to construct a binary search tree and traverse it with depth first search', () => {
    const bst = new BinarySearchTree<number>();
    const items = [4, 2, 6, 1, 3, 6, 5, 7];
    items.forEach(item => bst.add(item));
    expect(bst.traverseDFS()).toStrictEqual([4, 2, 1, 3, 6, 5, 7]);
  });
});

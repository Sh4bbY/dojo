import {BinaryTreeNode} from './BinaryTreeNode';
import {IBinarySearchTree} from './IBinarySearchTree';

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
  public root: BinaryTreeNode<T> = null;

  add(data: T, node: BinaryTreeNode<T> = null): void {
    throw new Error('Not yet implemented');
  }

  traverseBFS(node: BinaryTreeNode<T> = this.root, result: T[] = [], queue: BinaryTreeNode<T>[] = []): T[] {
    throw new Error('Not yet implemented');
  }

  traverseDFS(node: BinaryTreeNode<T> = this.root, result: T[] = []): T[] {
    throw new Error('Not yet implemented');
  }
}

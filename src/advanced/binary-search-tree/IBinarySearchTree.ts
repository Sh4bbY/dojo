import {BinaryTreeNode} from './BinaryTreeNode';

export interface IBinarySearchTree<T> {
  add(data: T, node: BinaryTreeNode<T>): void;

  traverseBFS(node: BinaryTreeNode<T>, result: T[], queue: BinaryTreeNode<T>[]): T[];

  traverseDFS(node: BinaryTreeNode<T>, result: T[]): T[];
}

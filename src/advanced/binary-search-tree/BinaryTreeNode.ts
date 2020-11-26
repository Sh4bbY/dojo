export class BinaryTreeNode<T> {
  public data: T;
  public left: BinaryTreeNode<T> = null;
  public right: BinaryTreeNode<T> = null;

  constructor(data: T) {
    this.data = data;
  }
}

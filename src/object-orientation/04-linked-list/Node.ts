export class Node<T> {
  public next: Node<T> = null;
  public prev: Node<T> = null;
  public data: T;

  constructor(data: T) {
    this.data = data;
  }
}

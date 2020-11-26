import {Node} from './Node';

export interface ILinkedList<T> {
  append(data: T);

  prepend(data: T);

  getNodeAt(index: number): Node<T>;

  insertBefore(index: number, data: T);

  insertBehind(index: number, data: T);

  delete(node: Node<T>): void;

  traverse(): T[];

  length(): number;

  find(comparator: (data: T) => boolean): Node<T> | null;
}

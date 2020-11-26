import {ILinkedList} from './LinkedList.interface';
import {Node} from './Node';

export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> = null;

  prepend(data: T) {
    throw new Error('Not yet implemented');
  }

  append(data: T) {
    throw new Error('Not yet implemented');
  }

  getNodeAt(index: number): Node<T> | null {
    throw new Error('Not yet implemented');
  }

  insertBefore(index: number, data: T) {
    throw new Error('Not yet implemented');
  }

  insertBehind(index: number, data: T) {
    throw new Error('Not yet implemented');
  }

  find(comparator: (data: T) => boolean): Node<T> | null {
    throw new Error('Not yet implemented');
  }

  delete(node: Node<T>): void {
    throw new Error('Not yet implemented');
  }

  traverse(): T[] {
    throw new Error('Not yet implemented');
  }

  length(): number {
    throw new Error('Not yet implemented');
  }
}

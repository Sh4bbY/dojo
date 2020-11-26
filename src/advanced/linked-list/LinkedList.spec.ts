import {LinkedList} from './LinkedList.solution';

describe('LinkedList', () => {
  it('should be able to traverse the list and get its length', () => {
    const list = new LinkedList();

    expect(list.length()).toBe(0);
    expect(list.traverse()).toStrictEqual([]);
  });

  it('should be able to prepend data', () => {
    const list = new LinkedList();

    list.prepend('a');
    list.prepend('b');
    list.prepend('c');

    expect(list.length()).toBe(3);
    expect(list.traverse()).toStrictEqual(['c', 'b', 'a']);
  });

  it('should be able to append data', () => {
    const list = new LinkedList();

    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.length()).toBe(3);
    expect(list.traverse()).toStrictEqual(['a', 'b', 'c']);
  });

  it('should be able to get a node at a given index', () => {
    const list = new LinkedList();

    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.getNodeAt(-1)).toBe(null);
    expect(list.getNodeAt(0)).toHaveProperty('data', 'a');
    expect(list.getNodeAt(1)).toHaveProperty('data', 'b');
    expect(list.getNodeAt(2)).toHaveProperty('data', 'c');
    expect(list.getNodeAt(3)).toBe(null);
  });

  it('should be able to insert data before a given index', () => {
    const list = new LinkedList();

    list.append('a');
    list.append('b');
    list.append('c');

    list.insertBefore(3, 'a0');
    expect(list.traverse()).toStrictEqual(['a', 'b', 'c']);

    list.insertBefore(2, 'c0');
    expect(list.traverse()).toStrictEqual(['a', 'b', 'c0', 'c']);

    list.insertBefore(1, 'b0');
    expect(list.traverse()).toStrictEqual(['a', 'b0', 'b', 'c0', 'c']);

    list.insertBefore(0, 'a0');
    expect(list.traverse()).toStrictEqual(['a0', 'a', 'b0', 'b', 'c0', 'c']);
  });

  it('should be able to insert data after a given index', () => {
    const list = new LinkedList();

    list.append('a');
    list.append('b');
    list.append('c');

    list.insertBehind(3, 'a1');
    expect(list.traverse()).toStrictEqual(['a', 'b', 'c']);

    list.insertBehind(2, 'c1');
    expect(list.traverse()).toStrictEqual(['a', 'b', 'c', 'c1']);

    list.insertBehind(1, 'b1');
    expect(list.traverse()).toStrictEqual(['a', 'b', 'b1', 'c', 'c1']);

    list.insertBehind(0, 'a1');
    expect(list.traverse()).toStrictEqual(['a', 'a1', 'b', 'b1', 'c', 'c1']);
  });

  it('should be able to find nodes by a given comparator', () => {
    const list = new LinkedList();

    list.append('a');
    list.append('b');
    list.append('c');

    const node = list.find(data => data === 'b');
    expect(node).toHaveProperty('data', 'b');
    expect(node).toHaveProperty('prev.data', 'a');
    expect(node).toHaveProperty('next.data', 'c');
  });

  it('should be able to delete a given node', () => {
    const list = new LinkedList();

    list.append('a');
    list.append('b');
    list.append('c');

    let node = list.find(data => data === 'b');
    list.delete(node);

    expect(list.length()).toBe(2);
    expect(list.traverse()).toStrictEqual(['a', 'c']);

    node = list.find(data => data === 'a');
    list.delete(node);

    expect(list.length()).toBe(1);
    expect(list.traverse()).toStrictEqual(['c']);

    node = list.find(data => data === 'c');
    list.delete(node);

    expect(list.length()).toBe(0);
    expect(list.traverse()).toStrictEqual([]);
  });
});


import {BinarySearchTree} from './BinarySearchTree.solution';
import {BinaryTreeNode} from './BinaryTreeNode';

interface PrintInfo<D> {
  node: BinaryTreeNode<D>,
  x: number,
  depth: number,
}

export class BinaryTreePrinter<D, T extends BinarySearchTree<D>> {
  private tree: T = null;
  private depth: number;
  private minX: number;
  private maxX: number;
  private coordinates: string[][];
  private infos: PrintInfo<D>[];

  constructor(tree: T) {
    this.tree = tree;
  }

  print(): string {
    this.infos = [];
    this.depth = 0;
    this.minX = 0;
    this.maxX = 0;
    this.coordinates = [];

    this.getNodeInfo(this.tree.root);
    this.createCoordinates();
    return this.printNodes();
  }

  getNodeInfo(node: BinaryTreeNode<D>, x = 0, depth = 0) {
    this.infos.push({node, x, depth});

    if (x < this.minX) {
      this.minX = x;
    }
    if (x > this.maxX) {
      this.maxX = x;
    }
    if (depth > this.depth) {
      this.depth = depth;
    }

    const fraction = 1 / (depth + 1);
    if (node.left) {
      this.getNodeInfo(node.left, x - fraction, depth + 1);
    }
    if (node.right) {
      this.getNodeInfo(node.right, x + fraction, depth + 1);
    }
  }

  createCoordinates() {
    const x: string[] = [];
    const length = (this.maxX - this.minX) * this.depth * 2 + 1;
    for (let i = 0; i <= length; i++) {
      x.push(' ');
    }
    const height = this.depth * 3;
    for (let i = 0; i <= height; i++) {
      this.coordinates.push([].concat(x));
    }
  }

  printNodes(): string {
    this.infos.forEach(info => {
      let parentEdgeLength = 0;
      if (info.depth > 0) {
        parentEdgeLength = this.depth - info.depth + 1;
      }
      const xFactor = 2 * this.depth;
      // const yFactor = 2 + ;
      const y = info.depth;// + parentEdgeLength;
      const x = Math.round((info.x - this.minX) * xFactor);

      // console.log('node', info.node.data, 'depth', info.depth, 'parentLength', parentEdgeLength, 'x', x, 'y', y);
      this.coordinates[y][x] = String(info.node.data);

      // if (info.node.left) {
      //   this.coordinates[y + 1][x - 1] = '/';
      // }
      // if (info.node.right) {
      //   this.coordinates[y + 1][x + 1] = '\\';
      // }
    });

    return this.coordinates.reduce((str, line) => str + line.join('') + '\n', '');
  }
}

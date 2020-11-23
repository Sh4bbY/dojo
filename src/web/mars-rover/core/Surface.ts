import {AbstractSurfaceItem} from './AbstractSurfaceItem';
import {SurfaceItem} from './SurfaceItem';

export class Surface {
  private el: HTMLElement;
  public readonly width: number;
  public readonly height: number;
  public gridSize: number;
  public items: AbstractSurfaceItem[];
  public surfaceItems: SurfaceItem[];

  constructor(el) {
    this.el = el;
    this.gridSize = 20;
    this.width = 20;
    this.height = 20;
    this.items = [];
    this.surfaceItems = [];
    this.updateUI();
  }

  add(item: AbstractSurfaceItem) {
    this.el.appendChild(item.el);
    this.items.push(item);
    item.surface = this;
    item.updateUI();
  }

  addItem(item: SurfaceItem) {
    this.el.appendChild(item.el);
    this.surfaceItems.push(item);
    item.surface = this;
    item.updateUI();
  }

  removeItem(item: SurfaceItem) {
    this.el.removeChild(item.el);
    const index = this.surfaceItems.indexOf(item);
    this.surfaceItems.splice(index, 1);
  }

  updateUI() {
    this.el.style.width = this.width * this.gridSize + 'px';
    this.el.style.minWidth = this.width * this.gridSize + 'px';
    this.el.style.height = this.height * this.gridSize + 'px';
    this.el.style.minHeight = this.height * this.gridSize + 'px';
  }
}

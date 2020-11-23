import template from './templates/item.html';
import {AbstractSurfaceItem} from './AbstractSurfaceItem';
import {SurfaceItemType} from './SurfaceItemType';

export interface SurfaceItemConfig {
  x?: number,
  y?: number,
  type?: SurfaceItemType,
  data?: any,
}

export class SurfaceItem extends AbstractSurfaceItem {
  protected iconEl: HTMLElement;
  public type: SurfaceItemType;

  constructor(config: SurfaceItemConfig) {
    super(template, config);
    this.iconEl = this.el.querySelector('i');
    this.type = config?.type || SurfaceItemType.OBSTACLE;
  }

  public updateUI() {
    this.updatePosition();
    this.iconEl.classList.add(this.getClassName());
  }

  private getClassName() {
    switch (this.type) {
      case SurfaceItemType.FLAG:
        return 'mdi-flag';
      case SurfaceItemType.MINERAL:
        return 'mdi-diamond-stone';
      case SurfaceItemType.OBSTACLE:
        return 'mdi-wall';
    }
  }

  public toString(): string {
    return `ID: ${this.id}, Type: ${this.type}, Pos: {x: ${this.x}, y: ${this.y}}`;
  }
}

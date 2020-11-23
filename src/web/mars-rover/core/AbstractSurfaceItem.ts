import {Surface} from './Surface';
import {SurfaceItemConfig} from './SurfaceItem';

export abstract class AbstractSurfaceItem {
  private static idCount = 0;

  public el: HTMLElement;
  public surface: Surface;

  public id: number;
  public x: number;
  public y: number;
  protected data: any;

  protected constructor(template: string, config?: SurfaceItemConfig) {
    this.el = this.createElementFromTemplate(template);
    this.x = config?.x || 0;
    this.y = config?.y || 0;
    this.data = config?.data || {};
    this.id = AbstractSurfaceItem.idCount++;
  }

  protected createElementFromTemplate(template: string): HTMLElement {
    const div = document.createElement('div');
    div.innerHTML = template;
    return div.firstChild as HTMLElement;
  }

  public abstract updateUI(): void;

  protected updatePosition() {
    this.el.style.fontSize = this.surface.gridSize - 3 + 'px';
    this.el.style.width = this.surface.gridSize + 'px';
    this.el.style.height = this.surface.gridSize + 'px';
    this.el.style.left = this.x * this.surface.gridSize + 'px';
    this.el.style.top = this.y * this.surface.gridSize + 'px';
  }
}

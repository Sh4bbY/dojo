import {AbstractSurfaceItem} from './AbstractSurfaceItem';
import {MissionControl} from './MissionControl';
import {SurfaceItem} from './SurfaceItem';
import template from './templates/rover.html';

export enum Direction {
  NORTH,
  EAST,
  SOUTH,
  WEST,
}

export interface ActionLog {
  action: string,
  x: number,
  y: number,
}

export class Rover extends AbstractSurfaceItem {
  private iconEl: HTMLElement;
  private degrees: number;
  protected direction: Direction;
  public bag: SurfaceItem[];
  public logs: string[];
  public actions: ActionLog[];
  public control: MissionControl;

  constructor() {
    super(template);
    this.iconEl = this.el.querySelector('i');
    this.x = 0;
    this.y = 0;
    this.bag = [];
    this.logs = [];
    this.actions = [];
    this.degrees = 0;
    this.direction = Direction.NORTH;
  }

  public async moveForward() {
    switch (this.direction) {
      case Direction.NORTH:
        this.y -= 1;
        break;
      case Direction.EAST:
        this.x += 1;
        break;
      case Direction.SOUTH:
        this.y += 1;
        break;
      case Direction.WEST:
        this.x -= 1;
        break;
    }
    this.updatePosition();
    this.logAction('Move Forward');
    await this.delay();
  }

  public async moveBackward() {
    switch (this.direction) {
      case Direction.NORTH:
        this.y += 1;
        break;
      case Direction.EAST:
        this.x -= 1;
        break;
      case Direction.SOUTH:
        this.y -= 1;
        break;
      case Direction.WEST:
        this.x += 1;
        break;
    }
    this.updatePosition();
    this.logAction('Move Backward');
    await this.delay();
  }

  public async turnLeft() {
    this.degrees -= 90;
    switch (this.direction) {
      case Direction.NORTH:
        this.direction = Direction.WEST;
        break;
      case Direction.EAST:
        this.direction = Direction.NORTH;
        break;
      case Direction.SOUTH:
        this.direction = Direction.EAST;
        break;
      case Direction.WEST:
        this.direction = Direction.SOUTH;
        break;
    }
    this.updateOrientation();
    this.logAction('Turn Left');
    await this.delay();
  }

  public async turnRight() {
    this.degrees += 90;
    switch (this.direction) {
      case Direction.NORTH:
        this.direction = Direction.EAST;
        break;
      case Direction.EAST:
        this.direction = Direction.SOUTH;
        break;
      case Direction.SOUTH:
        this.direction = Direction.WEST;
        break;
      case Direction.WEST:
        this.direction = Direction.NORTH;
        break;
    }
    this.updateOrientation();
    this.logAction('Turn Right');
    await this.delay();
  }

  public grab(): SurfaceItem | undefined {
    const item = this.surface.surfaceItems.find(item => item.x === this.x && item.y === this.y);
    this.logAction('Grab', false);

    if (!item) {
      this.log(`Nothing to grab at {x: ${this.x}, y: ${this.y}}`);
      return;
    }

    this.log(`Grabbed item: ${item.id} at {x: ${this.x}, y: ${this.y}}`);
    this.surface.removeItem(item);
    setTimeout(() => this.control.updateUI(), 5);
    return item;
  }

  public drop(item: SurfaceItem) {
    item.x = this.x;
    item.y = this.y;

    this.logAction('Drop', false);
    this.bag.splice(this.bag.indexOf(item), 1);
    this.surface.addItem(item);
  }

  public updateTransition(ms: number) {
    if (ms < 50) {
      this.el.style.transition = 'none';
      this.iconEl.style.transition = 'none';
      return;
    }
    this.el.style.transition = ms + 'ms all cubic-bezier(0.500, 0.250, 0.500, 0.750)';
    this.iconEl.style.transition = ms + 'ms all cubic-bezier(0.500, 0.250, 0.500, 0.750)';
  }

  updateUI() {
    this.updatePosition();
    this.updateOrientation();
  }

  updateOrientation() {
    this.iconEl.style.transform = `rotate(${this.degrees}deg)`;
  }

  private async delay() {
    await new Promise((resolve) => setTimeout(resolve, this.control.instructionDelay));
  }

  protected log(str: string) {
    const now = new Date();
    let ms = String(now.getMilliseconds());
    while (ms.length < 3) {
      ms = '0' + ms;
    }
    const time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ':' + ms;
    this.logs.push(`[${time}] ${str}`);
    this.control.updateUI();
  }

  private logAction(action: string, showInLogs = true) {
    if (showInLogs) {
      this.log(action);
    }
    this.actions.push({action, ...this.position});
  }

  protected get position(): { x: number, y: number } {
    return {x: this.x, y: this.y};
  }
}

import { Rover } from "../../core/Rover";
import { SurfaceItem } from "../../core/SurfaceItem";
import { Direction } from "../../core/Rover";
import { Rover01 } from "../../missions/01-move-around/Rover01.solution";
import { SurfaceItemType } from "../../core/SurfaceItemType";

export class Rover02 extends Rover01 {
  /**
   * Add your code here!
   * try to enhance the Rover with functionalities that prove the robot handling in the protocol
   */

  public turnToEast() {
    switch (this.direction) {
      case Direction.NORTH:
        this.turnRight();
        break;
      case Direction.EAST:
        break;
      case Direction.SOUTH:
        this.turnLeft();
        break;
      case Direction.WEST:
        this.turnRight();
        this.turnRight();
        break;
    }
  }

  public turnToSouth() {
    switch (this.direction) {
      case Direction.NORTH:
        this.turnRight();
        this.turnRight();
        break;
      case Direction.EAST:
        this.turnRight();
        break;
      case Direction.SOUTH:
        break;
      case Direction.WEST:
        this.turnLeft();
        break;
    }
  }
  public moveAxis(input, axis) {
    if (axis === "x") {
      axis = this.x;
      this.turnToEast();
    }
    if (axis === "y") {
      axis = this.y;
      this.turnToSouth();
    }
    if (input > axis) {
      this.moveForwardNSteps(input - axis - 1);
    }
    if (input < axis) {
      this.moveBackwardNSteps(axis - input - 1);
    }
  }

  public moveToPosition(x, y) {
    if (this.x === x && this.y === y) {
      return;
    }
    //move x axis
    this.moveAxis(x, "x");

    //move y axis
    this.moveAxis(y, "y");
  }

  // public
  public getItemsCoords(items) {
    let coordArr = [];

    for (let i = 0; i < items.length; i++) {
      let newCoord = { x: items[i].x, y: items[i].y };
      coordArr.push(newCoord);
    }
    return coordArr;
  }

  public async lootItems(items: SurfaceItem[]) {
    const mineralCoords = this.getItemsCoords(items);

    for (let i = 0; i < items.length; i++) {
      this.moveToPosition(mineralCoords[i].x, mineralCoords[i].y);
      this.pickUp();
    }
  }
}

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
  public moveXAxis(input) {
    this.turnToEast();
    console.log("turned east");
    if (input > this.x) {
      this.moveForwardNSteps(input - this.x - 1);
    }
    if (input < this.x) {
      this.moveBackwardNSteps(this.x - input - 1);
    }
  }

  public moveYAxis(input) {
    this.turnToSouth();
    console.log("turned east");
    if (input > this.y) {
      this.moveForwardNSteps(input - this.y - 1);
    }
    if (input < this.y) {
      this.moveBackwardNSteps(this.y - input - 1);
    }
  }

  public moveToPosition(x, y) {
    // errorhandling
    if (this.x === x && this.y === y) {
      console.log("already there");
      return;
    }
    //move x axis
      this.moveXAxis(x);
    

    //move y axis
      this.moveYAxis(y);
    console.log(this.x, this.y);
  }

  // public
  public getItemsCoords(items) {
    // console.log(this.surface.surfaceItems);
    const minerals = this.surface.surfaceItems.filter((item) => item.type === SurfaceItemType.MINERAL);
    let coordArr = [];

    for (let i = 0; i < minerals.length; i++) {
      let newCoord = { x: minerals[i].x, y: minerals[i].y };
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

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

  public turnToNorth() {
    switch (this.direction) {
      case Direction.NORTH:
        break;
      case Direction.EAST:
        this.turnLeft();
        break;
      case Direction.SOUTH:
        this.turnLeft();
        this.turnLeft();
        break;
      case Direction.WEST:
        this.turnRight();
        break;
    }
  }

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

  public turnToWest() {
    switch (this.direction) {
      case Direction.NORTH:
        this.turnLeft();
        break;
      case Direction.EAST:
        this.turnRight();
        this.turnRight();
        break;
      case Direction.SOUTH:
        this.turnRight();
        break;
      case Direction.WEST:
        break;
    }
  }

  public async moveToEast() {
    throw new Error("not yet implemented");
  }

  public async moveAxis(input, axis) {
    if (axis === "x") {
      axis = this.x;
      if (input > axis) {
        this.turnToEast();
        await this.moveForwardNSteps(input - axis - 1);
      }
      if (input < axis) {
        this.turnToWest();
        await this.moveForwardNSteps(axis - input - 1);
      }
    }
    if (axis === "y") {
      axis = this.y;
      if (input > axis) {
        this.turnToSouth();
        await this.moveForwardNSteps(input - axis - 1);
      }
      if (input < axis) {
        this.turnToNorth();
        await this.moveForwardNSteps(axis - input - 1);
      }
    }
  }

  public async moveToPosition(x, y) {
    if (this.x === x && this.y === y) {
      return;
    }
    //move x axis
    await this.moveAxis(x, "x");

    //move y axis
    await this.moveAxis(y, "y");
  }

  // public
  public getItemsCoords(items) {
    // let coordObj = {};
    const coordArr = [];
    items.forEach((newCoord) => {
      coordArr.push(newCoord = { x: newCoord.x, y: newCoord.y});
    });
    // for (let i = 0; i < items.length; i++) {
    //   let newCoord = { x: items[i].x, y: items[i].y };
    //   // coordObj[i] = newCoord;
    //   coordArr.push(newCoord);
    // }
    return coordArr;
    // return coordObj;
  }

  public async lootItems(items: SurfaceItem[]) {
    const mineralCoords = this.getItemsCoords(items).sort(function (a, b) {
      return a.x - b.x || a.y - b.y;
    });
    console.log(mineralCoords);
    for (let i = 0; i < items.length; i++) {
      await this.moveToPosition(mineralCoords[i].x, mineralCoords[i].y);
      this.pickUp();
    }
  }
}

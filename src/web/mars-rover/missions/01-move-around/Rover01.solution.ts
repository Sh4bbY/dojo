import { Rover } from "../../core/Rover";
import { SurfaceItem } from "../../core/SurfaceItem";

export class Rover01 extends Rover {
  //move forward n felder
  public async moveForwardNSteps(n) {
    for (let i = 0; i <= n; i++) {
      await this.moveForward();
    }
  }

  public async moveBackwardNSteps(n) {
    for (let i = 0; i <= n; i++) {
      await this.moveBackward();
    }
  }


  public pickUp() {
    const item = this.grab();
    this.bag.push(item);
  }

  public checkSurfaceForItems() {}

  /**
   * Add your code here!
   * try to enhance the Rover with functionalities that prove the robot handling in the protocol
   */
}

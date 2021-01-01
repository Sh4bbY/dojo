import { AbstractMissionProtocol } from "../../core/AbstractMissionProtocol";
import { SurfaceItem } from "../../core/SurfaceItem";
import { Rover01 } from "./Rover01.solution";

export class Protocol01 extends AbstractMissionProtocol {
  public rover: Rover01;

  public async start(...args: any[]) {
    for (let i = 0; i < 3; i++) {
      await this.rover.turnRight();
      await this.rover.moveForwardNSteps(18);
      await this.rover.pickUp();
    }

    await this.rover.turnRight();
    await this.rover.moveForwardNSteps(18);
  }

  public wasSuccessful(): boolean {
    return this.rover.bag.length === 3 && this.rover.x === 0 && this.rover.y === 0;
  }
}

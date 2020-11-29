import {AbstractMissionProtocol} from '../../core/AbstractMissionProtocol';
import {Rover01} from './Rover01.template';

export class Protocol01 extends AbstractMissionProtocol {
  public rover: Rover01;

  public async start(...args: any[]) {
    // TODO: Remove Code Example and write your code here
    for (let i = 0; i < 4; i++) {
      await this.rover.turnRight();
      await this.rover.moveForward();
    }
  }

  public wasSuccessful(): boolean {
    return this.rover.bag.length === 3 && this.rover.x === 0 && this.rover.y === 0;
  }
}

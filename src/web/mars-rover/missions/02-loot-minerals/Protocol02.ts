import { sleep } from '../../../../util/sleep';
import {AbstractMissionProtocol} from '../../core/AbstractMissionProtocol';
import {SurfaceItemType} from '../../core/SurfaceItemType';
import {Rover02} from './Rover02.solution';

export class Protocol02 extends AbstractMissionProtocol {
  public rover: Rover02;
  private mineralCount: number;

  public async start(...args: any[]) {
    const minerals = this.surface.surfaceItems.filter(item => item.type === SurfaceItemType.MINERAL);
    this.mineralCount = minerals.length;

        // await this.rover.turnRight();
    // await this.rover.moveForwardNSteps(15);


    await this.rover.moveToPosition(14, 2);
    await sleep(50);
    await this.rover.moveToPosition(1, 9);
    await sleep(50);
    await this.rover.moveToPosition(19, 1);
    // await this.rover.lootItems();

    // await this.rover.moveToPosition(1,2);

    await this.rover.getMineralCoords();
  }

  public wasSuccessful(): boolean {
    return this.rover.bag.length === this.mineralCount;
  }
}

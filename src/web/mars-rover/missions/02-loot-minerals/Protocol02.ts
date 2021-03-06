import {AbstractMissionProtocol} from '../../core/AbstractMissionProtocol';
import {SurfaceItemType} from '../../core/SurfaceItemType';
import {Rover02} from './Rover02.template';

export class Protocol02 extends AbstractMissionProtocol {
  public rover: Rover02;
  private mineralCount: number;

  public async start(...args: any[]) {
    const minerals = this.surface.surfaceItems.filter(item => item.type === SurfaceItemType.MINERAL);
    this.mineralCount = minerals.length;

    await this.rover.lootItems(minerals);
  }

  public wasSuccessful(): boolean {
    return this.rover.bag.length === this.mineralCount;
  }
}

import {MissionControl} from './MissionControl';
import {Rover} from './Rover';
import {Surface} from './Surface';

export abstract class AbstractMissionProtocol {
  public rover: Rover;
  public surface: Surface;
  public control: MissionControl;

  public abstract start(...args: any[]);

  public abstract wasSuccessful(): boolean;

  public setMissionControl(missionControl: MissionControl) {
    this.control = missionControl;
    this.rover = this.control.rover;
    this.surface = this.control.surface;
  }
}

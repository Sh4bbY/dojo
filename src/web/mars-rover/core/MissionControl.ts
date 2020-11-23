import {missions} from '../missions';
import {AbstractMissionProtocol} from './AbstractMissionProtocol';
import {MissionControlUI} from './MissionControlUI';
import {Rover} from './Rover';
import {Surface} from './Surface';
import template from './templates/mission-control.html';

export class MissionControl {
  private readonly el: HTMLElement;
  public instructionDelay: number;
  public surface: Surface;
  public rover: Rover;
  private missionEndCallbacks: (() => void)[];
  private protocol: AbstractMissionProtocol;
  private isMissionActive: boolean;
  private ui: MissionControlUI;

  constructor(selector: string) {
    this.el = document.querySelector(selector);
    this.el.innerHTML = template;
    this.instructionDelay = 100;
    this.missionEndCallbacks = [];
    this.ui = new MissionControlUI(this, this.el);
  }

  public loadSurface(SurfaceClass: new (el: HTMLElement) => Surface) {
    this.ui.surfaceEl.innerHTML = '';
    this.surface = new SurfaceClass(this.ui.surfaceEl);
  }

  public deployRover(RoverClass: new () => Rover) {
    this.rover = new RoverClass();
    this.rover.control = this;
    this.surface.add(this.rover);
    this.rover.updateTransition(this.instructionDelay);
  }

  public prepareMission(ProtocolClass: new () => AbstractMissionProtocol) {
    this.protocol = new ProtocolClass();
    this.protocol.setMissionControl(this);
  }

  public loadMission(id: number) {
    if (this.isMissionActive) {
      console.log('You have to wait for util the active mission has ended');
      return;
    }
    const mission = missions.find(m => m.id === id);
    this.loadSurface(mission.surface);
    this.deployRover(mission.rover);
    this.prepareMission(mission.protocol);
    this.updateUI();
  }

  public async startMission() {
    if (this.isMissionActive) {
      console.log('You have to wait for util the active mission has ended');
      return;
    }
    this.isMissionActive = true;
    await this.protocol.start();
    this.endMission();
  }

  public endMission() {
    this.isMissionActive = false;
    if (this.protocol.wasSuccessful()) {
      console.log('Mission Completed');
    } else {
      console.log('Mission Failed');
    }
    this.missionEndCallbacks.forEach(f => f());
  }

  public onMissionEnd(f: () => void) {
    this.missionEndCallbacks.push(f);
  }

  public updateInstructionDelay(delay: number) {
    this.instructionDelay = delay;
    this.rover.updateTransition(this.instructionDelay);
  }

  public updateUI() {
    this.ui.updateSurfaceItems();
    this.ui.updateRoverLogs();
    this.ui.updateRoverBag();
    this.ui.updateRoverActionCount();
  }
}

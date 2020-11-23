import {missions} from '../missions';
import {MissionControl} from './MissionControl';

export class MissionControlUI {
  private readonly control: MissionControl;
  public readonly surfaceEl: HTMLElement;
  public readonly missionSelectEl: HTMLSelectElement;
  private readonly delayInputEl: HTMLInputElement;
  private readonly loadMissionBtnEl: HTMLButtonElement;
  private readonly startMissionBtnEl: HTMLButtonElement;
  private readonly roverActionCountEl: HTMLElement;
  private readonly roverLogsEl: HTMLTextAreaElement;
  private readonly roverBagEl: HTMLTextAreaElement;
  private readonly surfaceItemsEl: HTMLTextAreaElement;

  constructor(control: MissionControl, el: HTMLElement) {
    this.control = control;
    this.surfaceEl = el.querySelector('#surface');
    this.missionSelectEl = el.querySelector('#mission-select');
    this.loadMissionBtnEl = el.querySelector('#load-mission');
    this.startMissionBtnEl = el.querySelector('#start-mission');
    this.delayInputEl = el.querySelector('#delay-input');
    this.roverLogsEl = el.querySelector('#rover-logs');
    this.roverBagEl = el.querySelector('#rover-bag');
    this.surfaceItemsEl = el.querySelector('#surface-items');
    this.roverActionCountEl = el.querySelector('#action-count');
    this.setupDomNodes();
  }

  private setupDomNodes() {
    missions.forEach(mission => {
      const option = document.createElement('option');
      option.value = String(mission.id);
      option.innerHTML = `${mission.id} - ${mission.name}`;
      this.missionSelectEl.appendChild(option);
    });

    this.loadMissionBtnEl.addEventListener('click', () => {
      const missionId = Number(this.missionSelectEl.value);
      this.control.loadMission(missionId);
      this.startMissionBtnEl.disabled = false;
    });

    this.startMissionBtnEl.addEventListener('click', () => {
      this.control.startMission();
      this.startMissionBtnEl.disabled = true;
      this.loadMissionBtnEl.disabled = true;
    });

    this.control.onMissionEnd(() => this.loadMissionBtnEl.disabled = false);

    this.delayInputEl.value = String(this.control.instructionDelay);
    this.delayInputEl.addEventListener('change', () => this.control.updateInstructionDelay(Number(this.delayInputEl.value)));
  }

  public updateRoverBag() {
    this.roverBagEl.value = this.control.rover.bag.reduce((str, item) => str + item.toString() + '\n', '');
    this.roverBagEl.scrollTop = this.roverBagEl.scrollHeight;
  }

  public updateSurfaceItems() {
    this.surfaceItemsEl.value = this.control.surface.surfaceItems.reduce((str, item) => str + item.toString() + '\n', '');
    this.surfaceItemsEl.scrollTop = this.surfaceItemsEl.scrollHeight;
  }

  public updateRoverLogs() {
    this.roverLogsEl.value = this.control.rover.logs.reduce((str, log) => str + log + '\n', '');
    this.roverLogsEl.scrollTop = this.roverLogsEl.scrollHeight;
  }

  public updateRoverActionCount() {
    this.roverActionCountEl.innerText = String(this.control.rover.actions.length);
  }
}

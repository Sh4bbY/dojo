import {MineralItem} from '../../core/MineralItem';
import {Surface} from '../../core/Surface';

export class Mars02 extends Surface {
  constructor(el) {
    super(el);
    this.spawnMinerals(10);
  }

  spawnMinerals(amount: number) {
    for (let i = 0; i < amount; i++) {
      const pos = this.getRandomSurfacePosition();
      const mineral = new MineralItem(pos);
      this.addItem(mineral);
    }
  }

  getRandomSurfacePosition() {
    const x = Math.floor(Math.random() * (this.width - 1));
    const y = Math.floor(Math.random() * (this.height - 1));
    return {x, y};
  }
}

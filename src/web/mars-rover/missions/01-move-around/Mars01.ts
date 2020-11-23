import {FlagItem} from '../../core/FlagItem';
import {Surface} from '../../core/Surface';

export class Mars01 extends Surface {
  constructor(el) {
    super(el);
    this.spawnFlags();
  }

  spawnFlags() {
    const flags = [
      new FlagItem({x: this.width - 1, y: 0}),
      new FlagItem({x: this.width - 1, y: this.height - 1}),
      new FlagItem({x: 0, y: this.height - 1}),
    ];

    flags.forEach(flag => this.addItem(flag));
  }
}

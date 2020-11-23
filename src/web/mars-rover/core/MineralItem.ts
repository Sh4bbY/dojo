import {SurfaceItem} from './SurfaceItem';
import {SurfaceItemType} from './SurfaceItemType';

export interface MineralItemConfig {
  x?: number,
  y?: number,
  data?: any,
}

export class MineralItem extends SurfaceItem {
  constructor(config: MineralItemConfig) {
    super({...config, type: SurfaceItemType.MINERAL});
  }
}

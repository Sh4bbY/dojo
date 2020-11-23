import {SurfaceItem} from './SurfaceItem';
import {SurfaceItemType} from './SurfaceItemType';

export interface FlagItemConfig {
  x?: number,
  y?: number,
  data?: any,
}

export class FlagItem extends SurfaceItem {
  constructor(config: FlagItemConfig) {
    super({...config, type: SurfaceItemType.FLAG});
  }
}

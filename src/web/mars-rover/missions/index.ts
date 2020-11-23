import {Mars01} from './01-move-around/Mars01';
import {Protocol01} from './01-move-around/Protocol01';
import {Rover01} from './01-move-around/Rover01';
import {Mars02} from './02-loot-minerals/Mars02';
import {Protocol02} from './02-loot-minerals/Protocol02';
import {Rover02} from './02-loot-minerals/Rover02';

export const missions = [
  {id: 1, name: 'Move Around', rover: Rover01, surface: Mars01, protocol: Protocol01},
  {id: 2, name: 'Loot Minerals', rover: Rover02, surface: Mars02, protocol: Protocol02},
];

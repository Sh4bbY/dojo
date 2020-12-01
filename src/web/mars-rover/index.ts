import '../styles/index.scss';
import {MissionControl} from './core/MissionControl';
import './styles.scss';

const missionControl = new MissionControl('#app');

missionControl.loadMission(1);

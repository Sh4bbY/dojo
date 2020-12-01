import '../styles/index.scss';
import {Earth} from './Earth';
import {Mars} from './Mars';
import {Moon} from './Moon';
import {SolarSystem} from './SolarSystem';
import {Sun} from './Sun';

const solarSystem = new SolarSystem('#app');
const sun = new Sun();
const earth = new Earth();
earth.setCenterOfGravity(sun, 60);
const mars = new Mars();
mars.setCenterOfGravity(sun, 100);
const moon = new Moon();
moon.setCenterOfGravity(earth, 10);

solarSystem.addObject(sun);
solarSystem.addObject(earth);
solarSystem.addObject(moon);
solarSystem.addObject(mars);

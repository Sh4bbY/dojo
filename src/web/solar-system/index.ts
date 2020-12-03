import '../styles/index.scss';
import {Earth, Mars, Moon, Sun} from './objects';
import {SolarSystem} from './SolarSystem';

const solarSystem = new SolarSystem('#app');
const sun = new Sun();

const earth = new Earth();
earth.setCenterOfGravity(sun, 150);

const mars = new Mars();
mars.setCenterOfGravity(sun, 200);

const moon = new Moon();
moon.setCenterOfGravity(earth, 25);

solarSystem.addObject(sun);
solarSystem.addObject(earth);
solarSystem.addObject(moon);
solarSystem.addObject(mars);

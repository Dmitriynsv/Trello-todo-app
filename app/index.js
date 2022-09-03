import { Desks } from './Desks.js';
import { DesksLogic } from './DesksLogic.js';
import { clock } from './utils/clock.util.js';


clock();
setInterval(clock, 1000);

new Desks(1).initialRender();
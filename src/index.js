import { __, curry, uncurryN } from 'ramda';
import { Particle } from './Particle.js';
import { Vector } from './Vector.js';
import { pipe, tap } from './functionalUtils.js';
import { CanvasDisplay } from './CanvasDisplay.js';

const particles = [
  Particle({ position: Vector(100, 150), acceleration: Vector(-5, -2) }),
  Particle(),
  Particle({ position: Vector(10, 50), acceleration: Vector(1, 7) }),
];

// 1 add Particle to the list
// const addParticle = arr => [...arr, Particle()];

const addRandomParticle = arr => [
  ...arr,
  pipe(
    // TODO::: PAra la posición no debería tener negativo
    Particle.randomPosition(1500),
    uncurryN(2, Particle.randomVelocity)(__, 20),
    curry(Particle.randomSize)(__, 10),
    tap(x => console.log(x.velocity)),
  )(Particle()),
];

// 2 move particles
const moveParticles = arr => arr.map(Particle.move);

// 3 work with display side effect
const drawCircle = cd => arr => {
  arr.map(CanvasDisplay.circle(cd));
};

const plotParticles = particlesArray => {
  const cd = pipe(
    CanvasDisplay,
    CanvasDisplay.clearCtx,
  )(); // estamos pasando la configuración por defecto del display
  pipe(drawCircle(cd))(particlesArray);
};

const loop = particlesArray => () => {
  const newParticles = pipe(
    // logger('intro log::', x => x.length),
    addRandomParticle,
    moveParticles,
    // tap((x) => console.log(x.length)),
    tap(plotParticles),
  )(particlesArray);
  requestAnimationFrame(loop(newParticles));
};
requestAnimationFrame(loop(particles));

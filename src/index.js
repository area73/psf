import { Particle } from './Particle.js';
import { Vector } from './Vector.js';
import { Maybe, pipe, tap } from './functionalUtils.js';

const particles = [
  Particle({ position: Vector(10, 50), acceleration: Vector(-5, -2) }),
  Particle(),
  Particle({ position: Vector(10, 50), acceleration: Vector(1, 7) }),
];

// Whether to check if console exist or not
// hint:: we cannot check something like this:
// isConsoleDefined(console)
// because in the case that console is not defined we will get a Uncaught ReferenceError:
// So we need to do a ternary and check for typeof and assign a new value (null) or returning value
const cs = typeof console === 'undefined' ? null : console;

// 1 add Particle to the list
const addParticle = arr => [...arr, Particle()];
// 2 move particles
const moveParticles = arr => arr.map(Particle.move);

const DIlog = (logger, info) => logger.log(info);
// we can stub console.log
const cnsl = {
  log: x => {
    // do nothing
    console.log(x);
  },
};

const loop = particlesArray => () => {
  const newParticles = pipe(
    // 1-. Dependency Injection
    tap(() => DIlog(cnsl, '------ INIT TRANSFORMATIONS -------')),
    addParticle,
    // 2-. Using a Maybe monad
    tap(x => Maybe.of(cs).map(() => cs.log('Number of particles::', x.length))),
    moveParticles,
    tap(() => console.log('------ END TRANSFORMATIONS -------')),
  )(particlesArray);
  // last .- Loop
  requestAnimationFrame(loop(newParticles));
};
requestAnimationFrame(loop(particles));

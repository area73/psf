import { Particle } from './Particle.js';
import { Vector } from './Vector.js';
import { pipe, tap } from './functionalUtils.js';

const particles = [
  Particle({ position: Vector(10, 50), acceleration: Vector(-5, -2) }),
  Particle(),
  Particle({ position: Vector(10, 50), acceleration: Vector(1, 7) }),
];

// 1 add Particle to the list
const addParticle = arr => [...arr, Particle()];
// 2 move particles
const moveParticles = arr => arr.map(Particle.move);
const loop = particlesArray => () => {
  const newParticles = pipe(
    // adding some logs
    tap(() => console.log('------ INIT TRANSFORMATIONS -------')),
    addParticle,
    tap(x => console.log('Number of particles::', x.length)),
    moveParticles,
    tap(() => console.log('------ END TRANSFORMATIONS -------')),
  )(particlesArray);
  // last .- Loop
  requestAnimationFrame(loop(newParticles));
};

requestAnimationFrame(loop(particles));

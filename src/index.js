import { Particle } from './Particle.js';
import { Vector } from './Vector.js';
import { pipe } from './functionalUtils.js';

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
  console.log(particlesArray.length);
  const newParticles = pipe(
    addParticle,
    moveParticles,
  )(particlesArray);
  // last .- Loop
  requestAnimationFrame(loop(newParticles));
};

requestAnimationFrame(loop(particles));

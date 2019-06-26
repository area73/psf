import { Particle } from './Particle.js';
import { Vector } from './Vector.js';

const particles = [
  Particle({ position: Vector(10, 50), acceleration: Vector(-5, -2) }),
  Particle(),
  Particle({ position: Vector(10, 50), acceleration: Vector(1, 7) }),
];

const loop = particlesArray => () => {
  console.log(particlesArray.length);
  // add new particle
  const newGroupOfParticles = [...particlesArray, Particle()];
  // move particles
  const newParticles = newGroupOfParticles.map(Particle.move);
  // last .- Loop
  requestAnimationFrame(loop(newParticles));
};

requestAnimationFrame(loop(particles));

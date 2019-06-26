import { Particle } from './Particle.js';
import { Vector } from './Vector.js';

const particles = [
  Particle({ position: Vector(10, 50), acceleration: Vector(-5, -2) }),
  Particle(),
  Particle({ position: Vector(10, 50), acceleration: Vector(1, 7) }),
];

const loop = particlesArray => () => {
  // 1 .- trace
  console.dir(
    `${particlesArray[0].position.x} , ${particlesArray[0].position.y}`,
  );
  // 2 .- move particles (using map)
  const newParticles = particlesArray.map(Particle.move); //  debugger;
  // last .- Loop
  requestAnimationFrame(loop(newParticles));
};

requestAnimationFrame(loop(particles));

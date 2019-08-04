import { Vector } from './Vector.js';

export const Particle = ({
  position = Vector(),
  acceleration = Vector(),
  velocity = Vector(),
  color = '#99ff22aa',
  size = 2,
} = {}) => ({
  position,
  acceleration,
  velocity,
  color,
  size,
});

Particle.move = part => ({
  ...part,
  position: Vector.add(part.position, part.velocity),
  velocity: Vector.add(part.velocity, part.acceleration),
});

const randomNumber = n => Math.round(n * Math.random());

const randomPositiveVector = (a, b) => {
  const newB = b || a;
  return Vector(randomNumber(a), randomNumber(newB));
};

const randomVector = (a, b) => {
  const seed = () => (Math.random() > 0.5 ? 1 : -1);
  const newA = a * seed();
  const newB = (b || a) * seed();
  return Vector(randomNumber(newA), randomNumber(newB));
};

Particle.updateProp = prop => particle => value => ({
  ...particle,
  ...{ [prop]: value },
});

Particle.randomVelocity = particle => n =>
  Particle.updateProp('velocity')(particle)(randomVector(n));

Particle.randomAcceleration = particle => n => ({
  ...particle,
  ...{ acceleration: randomVector(n) },
});
Particle.randomPosition = n => particle => ({
  ...particle,
  ...{ position: randomPositiveVector(n) },
});
Particle.randomSize = (particle, n) => ({
  ...particle,
  ...{ size: randomNumber(n) + 1 },
});

import { Vector } from './Vector.js';

// 1::  particle members
export const Particle = ({
  position = Vector(),
  acceleration = Vector(),
  velocity = Vector(),
  color = 0xffffff,
  size = 2,
} = {}) => ({
  position,
  acceleration,
  velocity,
  color,
  size,
});

// 2 move a particle
// to move a particle, the position will be set according to the velocity of the particle
// and the velocity will be set according to the acceleration of the same particle
// We need to do:
//    new position => position + velocity  ==> vector.add
//    new velocity => velocity + acceleration ==> vector.add

// n :: object -> object
Particle.move = part => ({
  ...part,
  position: Vector.add(part.position, part.velocity),
  velocity: Vector.add(part.velocity, part.acceleration),
});

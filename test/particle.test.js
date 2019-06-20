import { Particle } from '../src/Particle.js';
import { Vector } from '../src/Vector.js';

describe('λ :: Test Particle', () => {
  describe('(1) members of a particle', () => {
    test('a particle must have a default position Vector', () => {
      const part = Particle();
      expect(part.position).toBeObject();
      expect(part.position).toHaveProperty('x');
      expect(part.position).toHaveProperty('y');
    });
    test('a particle must have a default acceleration Vector', () => {
      const part = Particle();
      expect(part.acceleration).toBeObject();
      expect(part.acceleration).toHaveProperty('x');
      expect(part.acceleration).toHaveProperty('y');
    });
    test('a particle must have a default velocity Vector', () => {
      const part = Particle();
      expect(part.velocity).toBeObject();
      expect(part.velocity).toHaveProperty('x');
      expect(part.velocity).toHaveProperty('y');
    });
    test('a particle must have a default color in Hex code', () => {
      const part = Particle();
      expect(part.color).toBeNumber();
    });
    test('a particle must have a default size', () => {
      const part = Particle();
      expect(part.size).toBeNumber();
    });
    test('given some parameters create a particle', () => {
      const vectorA = Vector(10, 20);
      const vectorB = Vector(2, 5);
      const sizeNum = 22;
      const newParticle = Particle({
        position: vectorA,
        velocity: vectorB,
        size: sizeNum,
      });
      expect(newParticle).toHaveProperty('position', vectorA);
      expect(newParticle).toHaveProperty('velocity', vectorB);
      expect(newParticle).toHaveProperty('size', sizeNum);
    });
  });
  describe('(2) move a particle', () => {
    test('move a given particle', () => {
      const newParticle = Particle({
        position: Vector(10, 20), // position
        velocity: Vector(2, 5), // velocity
        acceleration: Vector(5, 5), // acceleration
        color: 0xffffff,
        size: 2,
      });

      expect(Particle.move(newParticle)).toEqual({
        position: { x: 12, y: 25 },
        velocity: { x: 7, y: 10 },
        acceleration: { x: 5, y: 5 },
        color: 0xffffff,
        size: 2,
      });
    });
  });
});

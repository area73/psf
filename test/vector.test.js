import { Vector } from '../src/Vector';

describe('λ :: Test a Vector', () => {
  describe('get a vector', () => {
    test('get a custom vector', () => {
      const newVector = Vector(10, 20);
      expect(newVector).toEqual({ x: 10, y: 20 });
    });
    test('get a default vector', () => {
      const newVector = Vector();
      expect(newVector).toEqual({ x: 0, y: 0 });
    });
  });

  describe('Working with angle', () => {
    test('get angle of a vector', () => {
      const ang = Vector.angle({ x: 10, y: 20 });
      expect(ang).toBe(1.1071487177940904);
    });

    test('get  angle of a default vector', () => {
      const ang = Vector.angle();
      expect(ang).toBe(0);
    });

    test('get  angle of a vector (edge)', () => {
      const ang = Vector.angle({ x: 0, y: 20 });
      expect(ang).toBe(1.5707963267948966);
    });

    test('get  angle of a vector (edge)', () => {
      const ang = Vector.angle({ x: 20, y: 0 });
      expect(ang).toBe(0);
    });
  });

  describe('Working with magnitude', () => {
    test('get a magnitude', () => {
      const magnitude = Vector.magnitude(Vector(7, 22));
      expect(magnitude).toBe(23.08679276123039);
    });

    test('get a magnitude (edge case)', () => {
      const magnitude = Vector.magnitude(Vector(0, 22));
      expect(magnitude).toBe(22);
    });
  });

  describe('Copy vector', () => {
    test('copy a vector', () => {
      const oldVector = Vector(10, 20);
      const vectorDup = Vector.copy(oldVector);
      const vectorDefault = Vector.copy();
      expect(vectorDup).toEqual({ x: 10, y: 20 });
      expect(vectorDup).not.toBe(oldVector);
      expect(vectorDefault).toEqual({ x: 0, y: 0 });
    });
  });

  test('add two vectors', () => {
    const vectorA = Vector(10, 20);
    const vectorB = Vector(5, 3);
    const addition = Vector.add(vectorA, vectorB);
    const defaultAdd = Vector.add();
    const onlyOneAdd = Vector.add(vectorA);
    expect(addition).toEqual({ x: 15, y: 23 });
    expect(defaultAdd).toEqual({ x: 0, y: 0 });
    expect(onlyOneAdd).toEqual({ ...vectorA });
  });

  test('get vector from  angle and magnitude (polar to cartesian)', () => {
    const vectorDup = Vector.polarToCart(10, 20);
    expect(vectorDup).toEqual({
      x: -16.781430581529047,
      y: -10.880422217787395,
    });
  });

  test('scale a vector by a constant', () => {
    const vectorScaled = Vector.scale(Vector(10, 20), 5);
    const v2 = Vector.scale();
    expect(vectorScaled).toEqual({ x: 50, y: 100 });
    expect(v2).toBeObject;
    expect(v2).toEqual({ x: 0, y: 0 });
  });

  test('subtracts vector', () => {
    const vectorA = Vector(10, 20);
    const vectorB = Vector(5, 3);
    const substraction = Vector.substract(vectorA, vectorB);
    expect(substraction).toEqual({ x: 5, y: 17 });
  });
});

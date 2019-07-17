import {CanvasDisplay} from '../src/CanvasDisplay.js';

describe('λ :: Test a CanvasDisplay', () => {

  describe('create a canvas Display', () => {
    document.body.innerHTML = `<canvas id="canvas"></canvas>`;
    const display = CanvasDisplay();
    test('CanvasDisplay by default', () => {
      expect(display).toBeObject();
    });
    test('it has a document', () => { expect(display.doc).toBeObject();});
    test('it has a width number', () => { expect(display.width).toBeNumber();});
    test('it has an height number', () => { expect(display.height).toBeNumber();});
    test('it has an id', () => {expect(display.id).toBeString();});
    test('it has a context object', () => {expect(display.ctx).toBeObject();});
    test('it has a canvas object', () => {expect(display.canvas).toBeObject();});
  });
});

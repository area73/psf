describe('λ :: RequestAnimationFrame', () => {

  test('execute requestAnimationFrame', () => {
    const cb = val => val;
    const requestId = requestAnimationFrame(cb);
    expect(requestId).toEqual(1);
  });


});

// create a composition
// Algebra definition --> f . g = f(g(x))
export const composeTwo = (f, g) => x => f(g(x));
export const compose = (...arg) => x =>
  arg.reduceRight((acc, cur) => cur(acc), x);
export const pipe = (...arg) => x => arg.reduce((acc, cur) => cur(acc), x);

// tap --> Runs the given function with the supplied object, then returns the object.
// (a → *) → a → a
export const tap = fn => x => {
  fn(x);
  return x;
};

// Maybe
export const Maybe = function(x) {
  this.__value = x;
};
Maybe.of = function(x) {
  return new Maybe(x);
};
Maybe.prototype.isNothing = function() {
  return this.__value === null || typeof this.__value === 'undefined';
};
Maybe.prototype.map = function(f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value));
};

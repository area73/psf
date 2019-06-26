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

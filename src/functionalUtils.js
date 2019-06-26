// create a composition
// Algebra definition --> f . g = f(g(x))

export const composeTwo = (f, g) => x => f(g(x));
export const compose = (...arg) => x =>
  arg.reduceRight((acc, cur) => cur(acc), x);
export const pipe = (...arg) => x => arg.reduce((acc, cur) => cur(acc), x);

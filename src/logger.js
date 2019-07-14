// To creat our log we want to:
// 1.- Isolate the side effect
// 2.- tap & return identity

const cs = typeof console === 'undefined' ? null : console;
const logInfo = cnsl => key => value =>
  value ? cnsl.log(key, value) : cnsl.log(key);
const consoleLog = (key, val) => logInfo(cs)(key)(val);

const evalItem = item => val => (typeof item === 'function' ? item(val) : item);

export const logger = (key, value) => obj => {
  const newKey = evalItem(key)(obj);
  const newVal = evalItem(value)(obj);
  consoleLog(newKey, newVal);
  return obj;
};

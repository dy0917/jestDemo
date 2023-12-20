const math = require('./utils');

const doAdd = (a, b) => math.add(a, b);
const doSubtract = (a, b) => math.subtract(a, b);
const doMultiply = (a, b) => math.multiply(a, b);
const doDivide = (a, b) => math.divide(a, b);

const mockFunctionExample = (functionA, a, b) => {
  if (!functionA()) {
    throw new Error();
  }
  return doAdd(a, b);
};

const mockFunctionCauseError = (functionA, a, b, errorHandle) => {
  try {
    if (!functionA()) {
      throw new Error();
    }
    return doAdd(a, b);
  } catch (e) {
    errorHandle();
  }
};

module.exports = {
  doAdd,
  doSubtract,
  doMultiply,
  doDivide,
  mockFunctionExample,
  mockFunctionCauseError,
};

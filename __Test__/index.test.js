const app = require('../sum.js');
const math = require('../utils');

test('calls math.add result', () => {
  expect(app.doAdd(1, 2)).toBe(3);
});

test('calls math.add', () => {
  math.add = jest.fn();
  math.subtract = jest.fn();
  app.doAdd(1, 2);
  expect(math.add.mock.calls).toHaveLength(1);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('mock function true', () => {
  math.add = jest.fn();
  const functionA = jest.fn(() => true);
  app.mockFunctionExample(functionA, 1, 2);
  expect(math.add.mock.calls).toHaveLength(1);
  expect(math.add).toHaveBeenCalledWith(1, 2);
});

test('mock function false', () => {
  math.add = jest.fn();
  const functionA = jest.fn(() => false);
  expect(() => app.mockFunctionExample(null, 1, 2)).toThrow(Error);
});

test('error mock function false', () => {
  math.add = jest.fn();
  const functionA = jest.fn(() => false);
  const errorHandle = jest.fn();
  app.mockFunctionCauseError(functionA, 1, 2, errorHandle);
  expect(errorHandle.mock.calls).toHaveLength(1);
});

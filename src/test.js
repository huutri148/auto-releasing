const add = require(".");
const sub = require("./sub");
const multiple= require("./multiple");

test("add", () => {
  expect(add(3, 2)).toEqual(1);
});

test("sub", () => {
  expect(sub(3, 2)).toEqual(1);
});

test("multiple", () => {
  expect(multiple(3, 2)).toEqual(6);
});
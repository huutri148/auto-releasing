const add = require(".");
const sub = require("./sub");

test("add", () => {
  expect(add(1, 2)).toEqual(3);
});

test("sub", () => {
  expect(sub(3, 2)).toEqual(1);
});

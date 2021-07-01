import { power, round, roundUp, roundDown, abs, quotient } from "../src/numbers";

describe("power", () => {
  test("raises the first parameter by the power of the ssecond parameter", () => {
    expect(power(2, 3)).toBe(8);
    expect(power(3, 4)).toBe(81);
  });
});

describe("round", () => {
  it("rounds the number passed in", () => {
    expect(round(2.8)).toBe(3);
    expect(round(2.49)).toBe(2);
    expect(round(0.4999)).toBe(0);
  });
});

describe("roundUp", () => {
  it("rounds up the number passed in", () => {
    expect(roundUp(2.8)).toBe(3);
    expect(roundUp(2.49)).toBe(3);
    expect(roundUp(0.4999)).toBe(1);
  });
});

describe("roundDown", () => {
  it("rounds down the number passed in", () => {
    expect(roundDown(2.8)).toBe(2);
    expect(roundDown(2.49)).toBe(2);
    expect(roundDown(0.4999)).toBe(0);
  });
});

describe("abs", () => {
  it("returns the absolute value of the number", () => {
    expect(abs(2.8)).toBe(2.8);
    expect(abs(-2.49)).toBe(2.49);
    expect(abs(-0.4999)).toBe(0.4999);
  })
});

describe("quotient", () => {
  it("returns the quotient of the first number divided by the second number", () => {
    expect(quotient(10, 3)).toEqual(3);
    expect(quotient(18, 7)).toEqual(2);
    expect(quotient(77, 10)).toEqual(7);
    expect(quotient(-9, 2)).toEqual(-4);
  });
});
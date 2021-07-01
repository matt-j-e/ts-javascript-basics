import { countChars, firstChar, firstChars } from "../src/strings";

describe("countChars", () => {
  it("returns the number of characters in a string", () => {
    expect(countChars("I'm a little teapot")).toBe(19);
    expect(countChars("fsfsgsfdg")).toEqual(9);
    expect(countChars("fsfsg")).toEqual(5);
    expect(countChars("")).toEqual(0);
  })
});

describe("firstChar", () => {
  it("returns the first character from the given string", () => {
    expect(firstChar("ABC")).toBe("A");
    expect(firstChar("DEF")).toBe("D");
    expect(firstChar("HJK")).toBe("H");
  });
});

describe("firstChars", () => {
  it("returns the first 'n' characters from the given string", () => {
    expect(firstChars("asdfghjk", 3)).toBe("asd");
  });
});
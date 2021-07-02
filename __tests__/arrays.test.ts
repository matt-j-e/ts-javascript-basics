import {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  numbersToStrings
} from "../src/arrays";

describe("getNthElement", () => {
  const stringArr = ["cat", "dog", "badger", "pigeon", "boris"];
  const numberArr = [1,2,3,4,5,6];
  const objectArr = [
    {
      firstName: "Matt",
      lastName: "Edwards"
    },
    {
      firstName: "Kirstie",
      lastName: "Edwards"
    },
    {
      firstName: "James",
      lastName: "Edwards"
    }
  ]

  it("returns the Nth element from a string array argument", () => {
    expect(getNthElement<string>(1, stringArr)).toBe("dog");
    expect(getNthElement<string>(2, stringArr)).toBe("badger");
  });

  it("returns the Nth element from a number array argument", () => {
    expect(getNthElement<number>(2, numberArr)).toBe(3);
    expect(getNthElement<number>(5, numberArr)).toBe(6);
  });

  it("returns the Nth element from an object array argument", () => {
    expect(getNthElement<{firstName: string, lastName: string}>(0, objectArr))
      .toEqual({firstName: "Matt", lastName: "Edwards"});
    expect(getNthElement<{firstName: string, lastName: string}>(2, objectArr))
      .toEqual({firstName: "James", lastName: "Edwards"});
  });
});

describe("arrayToCSVString", () => {
  it("converts an array of strings into a string with array elements separated by commas", () => {
    expect(arrayToCSVString<string>(["a", "b", "c", "d", "e", "f", "g"])).toBe("a,b,c,d,e,f,g");
  });
  it("converts an array of numbers into a string with array elements separated by commas", () => {
    expect(arrayToCSVString<number>([1,2,3,4,5,6,7])).toBe("1,2,3,4,5,6,7");
  });
});

describe("csvStringToArray", () => {
  it("converts a csv string to array containing the elements separated by commas", () => {
    expect(csvStringToArray("a,b,c,d,e,f,g")).toEqual(["a", "b", "c", "d", "e", "f", "g"]);
  });
});

describe("addToArray", () => {
  const stringArr = ["cat", "dog", "badger", "pigeon", "boris"];
  const numberArr = [1,2,3,4,5,6];
  const mixedArr: (string | number)[] = [1,2,3,4,5,6];

  it("adds the new string parameter to the string array parameter", () => {
    expect(addToArray("fish", stringArr)).toBe(undefined);
    expect(stringArr).toEqual(["cat", "dog", "badger", "pigeon", "boris", "fish"]);
  });

  it("adds the new number parameter to the numbers array parameter", () => {
    expect(addToArray(7, numberArr)).toBe(undefined);
    expect(numberArr).toEqual([1,2,3,4,5,6,7]);
  });

  it("adds the new string parameter to what is at the moment an array of numbers", () => {
    expect(addToArray("fish", mixedArr)).toBe(undefined);
    expect(mixedArr).toEqual([1,2,3,4,5,6,"fish"]);
  });
});

describe("numbersToStrings", () => {
  it("converts every number in an array to a string", () => {
    expect(numbersToStrings([1,2,3,4])).toEqual(["1", "2", "3", "4"]);
  });
});
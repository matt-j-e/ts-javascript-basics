export const getNthElement = <T>(index: number, array: T[]): T => {
  return array[index];
};

export const arrayToCSVString = <T>(array: T[]): string => {
  return array.join(",");
};

export const csvStringToArray = (string: string): string[] => {
  return string.split(",");
};

export const addToArray = <T>(newElement: T, array: T[]): void => {
  array.push(newElement);
};

export const numbersToStrings = (array: number[]): string[] => {
  return array.map(number => number.toString());
};
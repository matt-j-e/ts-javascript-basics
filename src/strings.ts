export const countChars = (string: string): number => {
  return string.length;
};

export const firstChar = (string: string): string => {
  return string[0];
};

export const firstChars = (string: string, count: number): string => {
  return string.slice(0, count);
}
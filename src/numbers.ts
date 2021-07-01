export const power = (x: number, y: number): number => {
  return Math.pow(x, y);
}

export const round = (x:number): number => {
  return Math.round(x);
}

export const roundUp = (x: number): number => {
  return Math.ceil(x);
}

export const roundDown = (x: number): number => {
  return Math.floor(x);
};

export const abs = (x: number): number => {
  return Math.abs(x);
}

export const quotient = (x: number, y: number): number => {
  if (x / y < 0) return roundUp(x / y); 
  return roundDown(x / y);
}
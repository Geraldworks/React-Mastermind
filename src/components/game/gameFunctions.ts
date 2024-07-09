import { inputColours } from '@/constants';

export const createWinningCombination = (): string[] => {
  // allows duplicates
  return pickValuesWithReplacement(Object.values(inputColours), 4);
};

function getRandomElement<T>(arr: T[]): T {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function pickValuesWithReplacement<T>(arr: T[], times: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < times; i++) {
    result.push(getRandomElement(arr));
  }
  return result;
}

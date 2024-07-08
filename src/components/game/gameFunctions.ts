import { inputColours } from '@/constants';
import arrayShuffle from 'array-shuffle';

export const createWinningCombination = (): string[] => {
  return arrayShuffle(Object.values(inputColours)).slice(0, 4);
};

// TODO add a way to manage dupes

// export const compareCombinations = (arr1: string[], arr2: string[]) => {
//   return 'hi';
// };

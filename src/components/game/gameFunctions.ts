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

interface Feedback {
  white: number;
  black: number;
}

export const checkArrays = (answerArray: string[], attemptArray: string[]): Feedback => {
  const feedback: Feedback = { white: 0, black: 0 };

  const answerHashmap = generateHashmap(answerArray);
  const attemptHashmap = generateHashmap(attemptArray);

  // add the white first
  Object.keys(answerHashmap).forEach((key) => {
    feedback['white'] += Math.min(answerHashmap[key], attemptHashmap[key] ?? 0);
  });

  // add the black
  let count = 0;
  for (let i = 0; i < answerArray.length; i++) {
    if (answerArray[i] === attemptArray[i]) {
      count += 1;
    }
  }

  feedback['white'] -= count;
  feedback['black'] += count;

  return feedback;
};

export const generateHashmap = <T extends string | number | symbol>(
  inputArray: T[]
): Record<T, number> => {
  return inputArray.reduce(
    (acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    },
    {} as Record<T, number>
  );
};

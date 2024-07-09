import { generateHashmap, checkArrays } from '../components/game/gameFunctions';

import { describe, it } from 'node:test';
import assert from 'node:assert';

const answerArray = ['red', 'red', 'blue', 'green'];

describe('when generating hashmaps', () => {
  it('output hashmap corresponds to input array', () => {
    const output = generateHashmap(answerArray);
    assert.deepStrictEqual(output, { red: 2, blue: 1, green: 1 });
  });
});

describe('generates correct Feedback when', () => {
  it('answer array has more occurences than input array', () => {
    const inputArray = ['red', 'pink', 'pink', 'blue'];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 1, white: 1 });
  });

  it('answer array has less occurences than input array', () => {
    const inputArray = ['red', 'red', 'red', 'blue'];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 2, white: 1 });
  });

  it('answer array and input array matches exactly', () => {
    const inputArray = [...answerArray];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 4, white: 0 });
  });

  it('answer array and input array has no matches at all', () => {
    const inputArray = ['pink', 'pink', 'pink', 'pink'];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 0, white: 0 });
  });
});

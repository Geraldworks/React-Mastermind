import {
  generateHashmap,
  checkArrays,
  generateResponseLabels
} from '../components/game/gameFunctions';

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
    assert.deepStrictEqual(output, { black: 1, white: 1, blank: 2 });
  });

  it('answer array has less occurences than input array', () => {
    const inputArray = ['red', 'red', 'red', 'blue'];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 2, white: 1, blank: 1 });
  });

  it('answer array and input array matches exactly', () => {
    const inputArray = [...answerArray];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 4, white: 0, blank: 0 });
  });

  it('answer array and input array has no matches at all', () => {
    const inputArray = ['pink', 'pink', 'pink', 'pink'];
    const output = checkArrays(answerArray, inputArray);
    assert.deepStrictEqual(output, { black: 0, white: 0, blank: 4 });
  });
});

describe('when generating response label array', () => {
  it('array must be of length 4', () => {
    const output = generateResponseLabels({ black: 3, white: 1, blank: 0 });
    assert.strictEqual(output.length, 4);
  });

  it('array label order must be correct', () => {
    const output = generateResponseLabels({ black: 1, white: 1, blank: 2 });
    assert.strictEqual(output[0], 'black');
    assert.strictEqual(output[1], 'white');
    assert.strictEqual(output[2], 'blank');
  });

  it('array must of the correct output', () => {
    const output = generateResponseLabels({ black: 2, white: 1, blank: 1 });
    assert.deepEqual(output, ['black', 'black', 'white', 'blank']);
  });
});

import PlayArea from './canvas/PlayArea';
import { useEffect } from 'react';
import { createWinningCombination } from './gameFunctions';
import { useAnswerDispatch } from './contexts/CustomGameHooks';

const Mastermind = () => {
  const answerDispatch = useAnswerDispatch();
  const answer = createWinningCombination();

  useEffect(() => {
    if (answerDispatch) {
      answerDispatch({ type: 'setAnswer', payload: answer });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <PlayArea />;
};

export default Mastermind;

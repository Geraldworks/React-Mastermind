import { Button } from '@/components/ui/button';
import ColourInput from './ColourInput';
import { useState } from 'react';
import {
  useTurnValue,
  useTurnDispatch,
  useAnswerValue,
  useOutcomeDispatch
} from '../contexts/CustomGameHooks';
import arrayEqual from 'array-equal';

interface Props {
  turn: number;
  setNotif: () => void;
  handleShowModal: (state: boolean) => void;
}

const ColourInputRow = (props: Props) => {
  const { turn, setNotif, handleShowModal } = props;
  const [strArray, setStrArray] = useState<string[]>(['', '', '', '']);

  // handling state
  const showModal = () => handleShowModal(true);

  // context values
  const currTurn = useTurnValue()!;
  const disabled = currTurn !== turn;
  const turnDispatch = useTurnDispatch()!;
  const answer = useAnswerValue()!;
  const outcomeDispatch = useOutcomeDispatch()!;

  const checkAnswer = () => {
    console.log(answer);
    // checking that all inputs are filled
    if (strArray.includes('')) {
      setNotif();
      return;
    }

    // checking for the correct answer
    if (arrayEqual(answer, strArray)) {
      outcomeDispatch({ type: 'setOutcome', payload: 'win' });
      showModal();
      return;
    }

    // increasing the turn by 1
    if (currTurn === 10) {
      outcomeDispatch({ type: 'setOutcome', payload: 'lose' });
      showModal();
    } else {
      turnDispatch({ type: 'increment' });
    }
  };

  const handleStrArray =
    (index: number) =>
    (colour: string): void => {
      const newArray = [...strArray];
      newArray[index] = colour;
      setStrArray(newArray);
    };

  return (
    <div className='flex justify-center mt-1'>
      <ColourInput disabled={disabled} arrayHandler={handleStrArray(0)} />
      <ColourInput disabled={disabled} arrayHandler={handleStrArray(1)} />
      <ColourInput disabled={disabled} arrayHandler={handleStrArray(2)} />
      <ColourInput disabled={disabled} arrayHandler={handleStrArray(3)} />
      <Button
        onClick={checkAnswer}
        disabled={disabled}
        variant='outline'
        className='ml-6 rounded-lg text-xs p-3'
      >
        Check
      </Button>
    </div>
  );
};

export default ColourInputRow;

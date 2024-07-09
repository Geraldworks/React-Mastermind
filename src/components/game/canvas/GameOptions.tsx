import { useState } from 'react';
import { useOutcomeDispatch, useTurnDispatch, useOutcomeValue } from '../contexts/CustomGameHooks';
import { Button } from '@/components/ui/button';

const GameOptions = ({ handleShowModal }: { handleShowModal: (state: boolean) => void }) => {
  const [retry, setRetry] = useState('Retry');

  const outcomeDispatch = useOutcomeDispatch()!;
  const outcomeValue = useOutcomeValue()!;
  const turnDispatch = useTurnDispatch()!;

  const handleGiveUp = () => {
    outcomeDispatch({ type: 'setOutcome', payload: 'lose' });
    turnDispatch({ type: 'setTurn', payload: 11 });
    handleShowModal(true);
  };

  return (
    <div className='flex items-center justify-center space-x-8 mb-6'>
      <Button disabled={outcomeValue !== 'pending'} variant='outline' onClick={handleGiveUp}>
        Give Up
      </Button>
      <Button
        variant='outline'
        onClick={() => {
          setRetry('Restarting...');
          window.location.reload();
        }}
      >
        {retry}
      </Button>
    </div>
  );
};

export default GameOptions;

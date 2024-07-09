import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';

import { useAnswerValue, useOutcomeValue } from '../contexts/CustomGameHooks';
import OutcomeColourRow from './OutcomeColourRow';

interface Props {
  show: boolean;
  handleShow: (show: boolean) => void;
  titleText: string;
  bodyText: string;
  answerColours: string[];
}

const OutcomeModal = (props: Props) => {
  const { show, handleShow, titleText, bodyText, answerColours } = props;

  const closeModal = () => handleShow(false);
  const restartGame = () => location.reload();

  return (
    <Dialog open={show} onOpenChange={closeModal}>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-center'>{titleText}</DialogTitle>
        </DialogHeader>
        <DialogDescription className='text-center'>
          {bodyText} <OutcomeColourRow colours={answerColours} />
        </DialogDescription>
        <div className='flex justify-center'>
          <Button type='button' variant='secondary' className='mr-3' onClick={closeModal}>
            Close
          </Button>
          <Button className='ml-3' type='button' variant='secondary' onClick={restartGame}>
            Play Again
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Outcome = ({ show, handleShow }: { show: boolean; handleShow: (state: boolean) => void }) => {
  const outcome = useOutcomeValue();
  const descText = 'The winning combination was';
  const answer = useAnswerValue();

  if (outcome === 'pending') {
    return null;
  }

  if (answer) {
    if (outcome === 'win') {
      return (
        <OutcomeModal
          show={show}
          handleShow={handleShow}
          titleText='You Win!'
          bodyText={descText}
          answerColours={answer}
        />
      );
    } else {
      return (
        <OutcomeModal
          show={show}
          handleShow={handleShow}
          titleText='You Lose...'
          bodyText={descText}
          answerColours={answer}
        />
      );
    }
  }
};

export default Outcome;

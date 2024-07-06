import NavBar from '@/components/NavBar';
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';

const Game = () => {
  return (
    <div>
      <Title label='Mastermind' />
      <NavBar
        leftButtonText='Return Home'
        leftButtonTo='/'
        rightButtonText='Rules'
        rightButtonTo='/rules'
      />
      <Button size='icon' variant='outline'></Button>
    </div>
  );
};

export default Game;

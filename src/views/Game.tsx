import NavBar from '@/components/NavBar';
import Title from '@/components/Title';
import Mastermind from '@/components/game/Mastermind';
import { GameContextProvider } from '@/components/game/contexts/GameContext';

const Game = () => {
  return (
    <div>
      <GameContextProvider>
        <Title label='Mastermind' />
        <Mastermind />
        <NavBar
          leftButtonText='Return Home'
          leftButtonTo='/'
          rightButtonText='Rules'
          rightButtonTo='/rules'
        />
      </GameContextProvider>
    </div>
  );
};

export default Game;

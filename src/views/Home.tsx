import NavBar from '@/components/NavBar';
import Body from '@/components/Body';
import Title from '@/components/Title';

const Home = () => {
  return (
    <div>
      <Title label='Welcome to Mastermind' />
      <Body>A simple mastermind game built using React</Body>
      <NavBar
        leftButtonText='Rules'
        leftButtonTo='rules'
        rightButtonText='Play Mastermind'
        rightButtonTo='game'
      />
    </div>
  );
};

export default Home;

import Body from '@/components/Body';
import NavBar from '@/components/NavBar';
import Title from '@/components/Title';

const Rules = () => {
  return (
    <div>
      <Title label='How to Play' />
      <Body>
        As the codebreaker in Mastermind, your objective is to guess a hidden sequence of colored
        pegs chosen by the opponent (the codemaker). The sequence consists of four pegs, each of
        which can be one of six possible colors. Your goal is to guess both the colors and their
        exact order correctly within a limited number of tries.
      </Body>
      <Body>
        To win, you need to deduce the correct sequence of colors through a series of guesses. After
        each guess, you'll receive feedback: a black peg for a correct color in the correct
        position, and a gray peg for a correct color in the wrong position. Use this feedback
        strategically to refine your subsequent guesses until you either guess the entire sequence
        correctly or use up all your allowed guesses. Mastermind challenges your logical thinking
        and deduction skills as you work towards uncovering the hidden code.
      </Body>
      <NavBar
        leftButtonText='Return Home'
        leftButtonTo='/'
        rightButtonText='Play Mastermind'
        rightButtonTo='/game'
      />
    </div>
  );
};

export default Rules;

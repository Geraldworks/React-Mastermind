import { createContext, useReducer } from 'react';

type Outcomes = 'win' | 'lose' | 'pending';

type TurnActions = { type: 'increment' } | { type: 'setTurn'; payload: number };
type AnswerActions = { type: 'setAnswer'; payload: string[] };
type OutcomeActions = { type: 'setOutcome'; payload: Outcomes };

interface GameContextProps {
  turn: number;
  turnDispatch: React.Dispatch<TurnActions>;
  answer: string[];
  answerDispatch: React.Dispatch<AnswerActions>;
  outcome: string;
  outcomeDispatch: React.Dispatch<OutcomeActions>;
}

const turnReducer = (state: number, action: TurnActions) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'setTurn':
      return action.payload;
  }
};

const answerReducer = (_state: string[], action: AnswerActions) => {
  switch (action.type) {
    case 'setAnswer':
      return action.payload;
  }
};

const outcomeReducer = (_state: string, action: OutcomeActions) => {
  switch (action.type) {
    case 'setOutcome':
      return action.payload;
  }
};

export const GameContext = createContext<GameContextProps | null>(null);

export const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [turn, turnDispatch] = useReducer(turnReducer, 1);
  const [answer, answerDispatch] = useReducer(answerReducer, ['', '', '', '']);
  const [outcome, outcomeDispatch] = useReducer(outcomeReducer, 'pending');

  return (
    <GameContext.Provider
      value={{ turn, turnDispatch, answer, answerDispatch, outcome, outcomeDispatch }}
    >
      {children}
    </GameContext.Provider>
  );
};

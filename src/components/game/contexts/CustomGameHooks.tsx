import { useContext } from 'react';
import { GameContext } from './GameContext';

export const useTurnValue = () => {
  return useContext(GameContext)?.turn;
};

export const useTurnDispatch = () => {
  return useContext(GameContext)?.turnDispatch;
};

export const useAnswerValue = () => {
  return useContext(GameContext)?.answer;
};

export const useAnswerDispatch = () => {
  return useContext(GameContext)?.answerDispatch;
};

export const useOutcomeValue = () => {
  return useContext(GameContext)?.outcome;
};

export const useOutcomeDispatch = () => {
  return useContext(GameContext)?.outcomeDispatch;
};

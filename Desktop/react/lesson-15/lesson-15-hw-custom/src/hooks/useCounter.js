import { useState } from "react";

export const useCounter = (a) => {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevState) => prevState + a);
  };

  const decrementHandler = () => {
    setCounter((prevState) => {
      if (prevState > 0) {
        return prevState - a;
      }
      return prevState;
    });
  };

const resetHandler = () => {
  setCounter(0)
}

  return {
    counter,
    incrementHandler,
    decrementHandler,
    resetHandler
  };
};

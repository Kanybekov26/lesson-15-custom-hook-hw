import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [inputValue, setINputValue] = useState("");
  const [isCounting, setIsCounting] = useState(false);

  const inPutChangeHandler = (value) => {
    setINputValue(value);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimer((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isCounting]);
  const result = inputValue * 60;
  const addhandler = () => {
    setTimer(result);
    setINputValue("");
  };
  const startHandler = () => {
    setIsCounting(true);
  };
  const pauseHandler = () => {
    setIsCounting(false);
  };
  const resetHandler = () => {
    setTimer(0);
    setIsCounting(false);
  };
  return {
    inPutChangeHandler,
    inputValue,
    timer,
    addhandler,
    resetHandler,
    startHandler,
    pauseHandler,
    isCounting,
  };
};

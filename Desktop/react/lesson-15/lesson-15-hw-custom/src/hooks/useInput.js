import { useState } from "react";

export const useInput = (type) => {
  const [enteredInput, setEnteredInput] = useState("");
  const [iserror, setError] = useState(false);

  let test;
  const inPutChangeHandler = (event) => {
    setEnteredInput(event.target.value);
  };

  


  const BlurEmailHandler = () => {
    setError(enteredInput.includes('@'))
  }


  const BlurPasswordHandler = () => {
    setError(enteredInput.trim().length > 6)

  }


  const BlurTextHandler = () => {
    setError(enteredInput.trim().length > 6)
  }
  return {
    enteredInput,
    inPutChangeHandler,
    test,
    iserror,
    BlurEmailHandler,
    BlurPasswordHandler,
    BlurTextHandler
  };
};

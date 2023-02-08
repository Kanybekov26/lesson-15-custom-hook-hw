import React from "react";
import { useInput } from "../hooks/useInput";

const PasswordInput = () => {
  const {
    enteredInput,
    inPutChangeHandler,
    test,
    iserror,
    BlurPasswordHandler,
  } = useInput("password");
  return (
    <>
      {iserror ?  <p>tuura</p> : <p>oilon</p>}
      <input
        type={"password"}
        placeholder={test}
        value={enteredInput}
        onChange={inPutChangeHandler}
        onBlur={BlurPasswordHandler}
      />
    </>
  );
};

export default PasswordInput;

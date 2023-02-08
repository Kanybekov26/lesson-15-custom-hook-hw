import { useInput } from "../hooks/useInput";

const EmailInput = () => {
const {enteredInput,inPutChangeHandler,test,iserror,BlurEmailHandler} = useInput("email")
  return (
    <>
    
      {iserror ?  <p>tuura</p> : <p>oilon</p>}<input
      placeholder={test}
        type={"email"}
        value={enteredInput}
        onChange={inPutChangeHandler}
        onBlur={BlurEmailHandler}
      />
    </>
  );
};
export default EmailInput

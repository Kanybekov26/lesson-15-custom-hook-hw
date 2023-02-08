import React from 'react'
import { useInput } from '../hooks/useInput'

const TextInput = () => {
    const {enteredInput,inPutChangeHandler,test,BlurTextHandler,iserror} = useInput("text")
  return (
    <>
    {iserror ? <p >tuura</p> : <p style={{color:"red"}}>oilon</p>}
    <input type={"text"}placeholder={test} value={enteredInput} onChange={inPutChangeHandler} onBlur={BlurTextHandler}/>
    </>
  )
}

export default TextInput
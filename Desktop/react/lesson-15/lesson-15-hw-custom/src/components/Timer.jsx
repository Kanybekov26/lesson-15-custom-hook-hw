import styled from "styled-components"
import { useTimer } from "../hooks/useTimer"
import Button from "./UI/Button"

const Timer = () => {
const {inputValue, inPutChangeHandler, timer, addhandler, isCounting, resetHandler, pauseHandler, startHandler} = useTimer()
    return(
        <Container>
            <ContainerInputandButton>
            <input value={inputValue} type={"number"} placeholder={"write number"} onChange={(e) => inPutChangeHandler(e.target.value)}/>
            <Button onClick={addhandler}>ADD</Button>
            </ContainerInputandButton>
            
            <p>{timer || "00"}</p>
            <ContainerButton>
            {!isCounting ?  <Button onClick={startHandler}>Start</Button> :  <Button onClick={pauseHandler}>Pause</Button>}
           
           <Button onClick={resetHandler}>Reset</Button>
            </ContainerButton>
           
        </Container>
    )
}
export default Timer

const Container = styled.div`
  background-color:violet;
  width: 300px;
    min-height: 100px;
    margin:auto;
    border-radius: 20px;
    margin-top:20px;
    padding:10px;
`


const ContainerInputandButton = styled.div`
    display: flex;
    justify-content: center;
`

const ContainerButton = styled.div`
    display: flex;
    justify-content:space-around;
`
import styled from "styled-components"
import { useCounter } from "../hooks/useCounter"
import Button from "./UI/Button"


const Counter = () => {
    const {counter,incrementHandler,decrementHandler,resetHandler} = useCounter(4)
    return(
        <Continer>
            <p>{counter}</p>

         <ContainerButton>
            <Button onClick={incrementHandler}>+</Button>
            <Button onClick={resetHandler}>🔄</Button>
            <Button onClick={decrementHandler}>-</Button>
        </ContainerButton>
        </Continer>
       
    )
}
export default Counter


const Continer = styled.div`
margin:auto;
background-color:blue;
    width: 200px;
    min-height: 100px;
    border-radius: 20px;

`


const ContainerButton = styled.div`
    display: flex;
    justify-content:space-around;
`
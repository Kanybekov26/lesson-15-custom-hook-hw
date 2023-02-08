import React from 'react'
import styled from 'styled-components'

const Button = ({children,onClick}) => {
  return (
    <div>
        <StyledButton onClick={onClick}>{children}</StyledButton>
    </div>
  )
}

export default Button


const StyledButton = styled.button`
  background-color:red;
  border:none;
  border-radius: 5px;
  padding:3px 10px 3px 10px;
  color:white;
  cursor: pointer;
  :hover{
    background-color: darkred;
  }
  :active{
    background-color:#430404;
  }
`
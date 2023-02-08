

import React from 'react'
import styled from 'styled-components'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

const Input = () => {
  return (
    <Container>
      <TextInput/>
      <PasswordInput/>
      <EmailInput/>
    </Container>
  )
}

export default Input

const Container = styled.div`
  background-color:violet;
  width: 300px;
    min-height: 250px;
    margin:auto;
    border-radius: 20px;
`
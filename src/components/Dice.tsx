import React, { FC } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`
const Die = styled.div`
  background: ${(p) => p.theme.colors.white};
  color: ${(p) => p.theme.colors.black};
  margin: 5px;
  padding: 3px;
  height: 2rem;
  width: 2rem;
`

const Dice: FC<{ die1: number; die2: number }> = ({ die1, die2 }) => {
  return (
    <Container>
      <Die>{die1}</Die>
      <Die>{die2}</Die>
    </Container>
  )
}

export default Dice

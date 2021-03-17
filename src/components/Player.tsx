import React, { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Dice from 'src/components/Dice'

const Container = styled.div<{ isMonster: boolean }>`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: ${(p) => (p.isMonster ? 'column-reverse' : 'column')};

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    flex-direction: ${(p) => (p.isMonster ? 'row-reverse' : 'row')};
  }
`

const Avatar = styled.div`
  padding-bottom: 2rem;
`

interface PlayerProps {
  name: string
  imageSrc: string
  isMonster?: boolean
  die1: number
  die2: number
  health: number
}

const Player: FC<PlayerProps> = ({
  name,
  imageSrc,
  isMonster,
  die1,
  die2,
  health,
}) => {
  return (
    <Container isMonster={isMonster}>
      <Avatar>
        <Image src={imageSrc} alt={name} width="200" height="200" />
        <p>{name}</p>
        <small>[Health: {health}]</small>
      </Avatar>
      <Dice die1={die1} die2={die2} />
    </Container>
  )
}

export default Player

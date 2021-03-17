import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'
import Game from 'src/components/Game'

const Container = styled.div`
  padding: 1rem;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${(p) => p.theme.colors.yellow};
  text-align: center;
  justify-content: center;
  align-items: center;
`

const Star = styled.span`
  font-size: 2.5rem;
  padding: 0.8rem;
`

const Title = styled.h1`
  font-size: 2rem;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    font-size: 3rem;
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 3px solid ${(p) => p.theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Index: NextPage = () => {
  return (
    <Container>
      <TitleContainer>
        <Star>*</Star>
        <Title>Battle Monstaz</Title>
        <Star>*</Star>
      </TitleContainer>
      <Game />
      <Footer>Created by M15sy</Footer>
    </Container>
  )
}

export default Index

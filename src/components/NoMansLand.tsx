import React, { FC } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { Status } from 'src/reducers/GameReducer'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    width: 400px;
  }
`

const Message = styled.div<{ color?: string; size?: string }>`
  padding: 1rem;
  ${(p) => p.color && `color: ${p.theme.colors[p.color]};`}
  ${(p) => p.size && `font-size: ${p.size};`}
`

const Button = styled.button`
  cursor: ${(p) => !p.disabled && 'pointer'};
  background: ${(p) => (p.disabled ? p.theme.colors.grey : p.theme.colors.red)};
  color: ${(p) => p.theme.colors.white};
  border: none;
  padding: 0.75rem;

  &:hover,
  &:focus {
    background-color: ${(p) =>
      p.disabled ? p.theme.colors.grey : lighten(0.1, p.theme.colors.red)};
  }
`

const Link = styled.a`
  cursor: pointer;
  color: ${(p) => p.theme.colors.blue};
  font-size: 100%;

  &:link,
  &:visited {
    text-decoration: none;
  }
`

interface NoMansLandProps {
  message: string
  onAttack: () => void
  onRetry: () => void
  onContinue: () => void
  status: Status
}

const NoMansLand: FC<NoMansLandProps> = ({
  message,
  onAttack,
  status,
  onRetry,
  onContinue,
}) => (
  <Container>
    <Message>{message}</Message>
    {status === Status.GAME_OVER ? (
      <>
        <Message color="red" size="1.5rem">
          GAME OVER!
        </Message>
        <Link onClick={onRetry}>Retry</Link>
      </>
    ) : status === Status.WIN ? (
      <>
        <Message color="green" size="1.5rem">
          YOU WIN!
        </Message>
        <Link onClick={onContinue}>Continue</Link>
      </>
    ) : (
      <Button onClick={onAttack} disabled={status !== Status.DEFAULT}>
        {status === Status.ROLLING ? 'rolling...' : 'ATTACK!'}
      </Button>
    )}
  </Container>
)

export default NoMansLand

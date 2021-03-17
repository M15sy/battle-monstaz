import React, { FC, useReducer } from 'react'
import styled from 'styled-components'
import Player from 'src/components/Player'
import NoMansLand from 'src/components/NoMansLand'
import GameReducer, {
  GameActions,
  initialGameState,
} from 'src/reducers/GameReducer'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: stretch;
  flex-direction: column;

  @media (min-width: ${(p) => p.theme.breakpoints.tablet}) {
    padding: 5rem 0;
    flex-direction: row;
  }
`

const Game: FC = () => {
  const [state, dispatch] = useReducer(GameReducer, initialGameState)
  const { playerHealth, monsterHealth } = state

  const onAttack = () => {
    dispatch(GameActions.START_ROLLING)
    setTimeout(async () => dispatch(GameActions.ROLL), 1500)
  }
  const onContinue = () => dispatch(GameActions.CONTINUE)
  const onRetry = () => dispatch(GameActions.RETRY)

  return (
    <>
      <p>Level {state.level}</p>
      <Container>
        <Player
          name="Player"
          imageSrc="/players/magic-lady.gif"
          die1={state.playerDie1}
          die2={state.playerDie2}
          health={playerHealth}
        />
        <NoMansLand
          message={state.message}
          status={state.status}
          onAttack={onAttack}
          onRetry={onRetry}
          onContinue={onContinue}
        />
        <Player
          name="Monster"
          imageSrc="/monsters/eye-spider.gif"
          isMonster
          die1={state.monsterDie1}
          die2={state.monsterDie2}
          health={monsterHealth}
        />
      </Container>
    </>
  )
}

export default Game

import { rollDie } from 'src/utils'

const maxHealth = 100

export enum Status {
  DEFAULT,
  ROLLING,
  WIN,
  GAME_OVER,
}

export enum GameActions {
  START_ROLLING = 'START_ROLLING',
  ROLL = 'ROLL',
  RETRY = 'RETRY',
  CONTINUE = 'CONTINUE',
}

interface GameState {
  level: number
  message: string
  status: Status
  playerDie1: number
  playerDie2: number
  playerHealth: number
  monsterDie1: number
  monsterDie2: number
  monsterHealth: number
}

const calculateHealth = (
  playerScore,
  playerHealth,
  monsterScore,
  monsterHealth
) => {
  const diff = playerScore - monsterScore
  if (diff === 0) {
    // draw
    return {
      status: Status.DEFAULT,
      message: "It's a draw",
      playerHealth,
      monsterHealth,
    }
  } else if (diff > 0) {
    // win
    const newMonsterHealth = monsterHealth - diff
    return {
      status: newMonsterHealth <= 0 ? Status.WIN : Status.DEFAULT,
      message: `Monster is hit ${diff}`,
      playerHealth,
      monsterHealth: newMonsterHealth,
    }
  } else {
    // loss
    const newPlayerHealth = playerHealth + diff
    return {
      status: newPlayerHealth <= 0 ? Status.GAME_OVER : Status.DEFAULT,
      message: `You're hit ${Math.abs(diff)}`,
      playerHealth: newPlayerHealth,
      monsterHealth,
    }
  }
}

export const initialGameState: GameState = {
  level: 1,
  message: '',
  status: Status.DEFAULT,
  playerDie1: null,
  playerDie2: null,
  playerHealth: maxHealth,
  monsterDie1: null,
  monsterDie2: null,
  monsterHealth: maxHealth,
}

const GameReducer = (state: GameState, action: GameActions): GameState => {
  switch (action) {
    case GameActions.START_ROLLING: {
      return {
        ...state,
        message: '',
        status: Status.ROLLING,
        playerDie1: null,
        playerDie2: null,
        monsterDie1: null,
        monsterDie2: null,
      }
    }

    case GameActions.ROLL: {
      const playerDie1 = rollDie()
      const playerDie2 = rollDie()
      const monsterDie1 = rollDie()
      const monsterDie2 = rollDie()

      const { message, playerHealth, monsterHealth, status } = calculateHealth(
        playerDie1 + playerDie2,
        state.playerHealth,
        monsterDie1 + monsterDie2,
        state.monsterHealth
      )

      return {
        ...state,
        status,
        message,
        playerDie1,
        playerDie2,
        playerHealth,
        monsterDie1,
        monsterDie2,
        monsterHealth,
      }
    }

    case GameActions.RETRY: {
      return initialGameState
    }

    case GameActions.CONTINUE: {
      const { level } = state
      return {
        ...initialGameState,
        level: level + 1,
      }
    }

    default:
      throw new Error(`Unhandled type: ${action}`)
  }
}

export default GameReducer

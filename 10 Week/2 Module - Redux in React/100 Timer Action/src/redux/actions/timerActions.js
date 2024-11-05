// define action constants here
export const INCREMENT_TIMER = 'INCREMENT_TIMER'
export const PAUSE_TIMER = 'PAUSE_TIMER'
export const RESET_TIMER = 'RESET_TIMER'
export const START_TIMER = 'START_TIMER'

// define action creators here

export function incrementTimer() {
  return { type: INCREMENT_TIMER }
}

export function pauseTimer() {
  return { type: PAUSE_TIMER }
}

export function resetTimer() {
  return { type: RESET_TIMER }
}

export function startTimer() {
  return { type: START_TIMER }
}

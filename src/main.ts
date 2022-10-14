import './style.css'

const state = {
  player1: '',
  player2: '',
}

function checkForEndGame() {
  if (state.player1 === '' || state.player2 === '') return
  if (state.player1 === 'rock' && state.player2 === 'rock') {
    alert('Tie game... play again!')
  } else if (state.player1 === 'rock' && state.player2 === 'paper') {
    alert('Player Two wins!')
  } else if (state.player1 === 'rock' && state.player2 === 'scissors') {
    alert('Player One wins!')
  } else if (state.player1 === 'paper' && state.player2 === 'paper') {
    alert('Tie game... play again!')
  } else if (state.player1 === 'paper' && state.player2 === 'paper') {
    alert('Tie game... play again!')
  } else if (state.player1 === 'scissors' && state.player2 === 'scissors') {
    alert('Tie game... play again!')
  }
}

function setupPlayer(id: 'player1' | 'player2') {
  const rockButton = document.querySelector(`.${id} #Rock`) as HTMLElement
  const paperButton = document.querySelector(`.${id} #Paper`) as HTMLElement
  const scissorsButton = document.querySelector(
    `.${id} #Scissors`
  ) as HTMLElement

  function assignRock(_event: MouseEvent) {
    state[id] = 'rock'
    rockButton.style.backgroundColor = 'green'
    checkForEndGame()
  }

  rockButton.addEventListener('click', assignRock)

  function assignPaper(_event: MouseEvent) {
    state[id] = 'paper'
    paperButton.style.backgroundColor = 'green'
    checkForEndGame()
  }

  paperButton.addEventListener('click', assignPaper)

  function assignScissors(_event: MouseEvent) {
    state[id] = 'scissors'
    scissorsButton.style.backgroundColor = 'green'
    checkForEndGame()
  }

  scissorsButton.addEventListener('click', assignScissors)
}

const playAgainButton = document.querySelector(
  '#PlayAgain'
) as HTMLButtonElement

function playAgain(_event: Event) {
  state.player1 = ''
  state.player2 = ''
}

playAgainButton.addEventListener('click', playAgain)

setupPlayer('player1')
setupPlayer('player2')

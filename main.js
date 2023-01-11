var gameBoard = document.querySelector('.game-board')
var wins = document.querySelector('.wins')
var cWins = document.querySelector('.c_wins')
var classicGame = document.querySelector('.classic')
var gameButtons = document.querySelector('.game-buttons')
var subtitle = document.querySelector('h2')
var newGameBtn = document.querySelector('.new-game-btn')

var currentGame = new Game

classicGame.addEventListener('click', startClassic)
gameBoard.addEventListener('click', function() {
  makeChoices(makeComputerChoice())
  setTimeout(resetGameBoard, 2000)
})
newGameBtn.addEventListener('click', returnNewGame)

function startClassic() {
  currentGame.gameType = 'classic'
  currentGame.setChoices()
  hide(gameButtons)
  show(gameBoard)
  show(newGameBtn)
  subtitle.innerText = 'Choose Your Fighter'
}

function makeChoices(cSelection) {
  var pSelection = event.target.className
  currentGame.checkWin(pSelection, cSelection)
  if (pSelection === 'rock' || 'paper' || 'scissors') {
    gameBoard.innerHTML = `
      <p>${pSelection}</p>
      <p>${cSelection}</p>`
  }
  wins.innerText = `Wins: ${currentGame.player1.wins}`
  cWins.innerText = `Wins: ${currentGame.player2.wins}`
}

function makeComputerChoice() {
  var computerChoices = currentGame.choices
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function resetGameBoard () {
  gameBoard.innerHTML = `<p class="rock">Rock</p>
  <p class="paper">Paper</p>
  <p class="scissors">Scissors</p>`
}

function returnNewGame() {
  show(gameButtons)
  hide(gameBoard)
  hide(newGameBtn)
  currentGame.resetGameType()
  subtitle.innerText = 'Choose Your Game!'
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
var gameBoard = document.querySelector('.game-board')
var wins = document.querySelector('.wins')
var cWins = document.querySelector('.c_wins')

var computerChoices = ['rock', 'paper', 'scissors']
var currentGame = new Game

gameBoard.addEventListener('click', function() {
  makeChoices(makeComputerChoice())
  setTimeout(resetGameBoard, 2000)
})

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
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function resetGameBoard () {
  gameBoard.innerHTML = `<p class="rock">Rock</p>
  <p class="paper">Paper</p>
  <p class="scissors">Scissors</p>`
}
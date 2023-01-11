var gameBoard = document.querySelector('.game-board')
var wins = document.querySelector('.wins')
var cWins = document.querySelector('.c_wins')

var computerChoices = ['rock', 'paper', 'scissors']
var currentGame = new Game

gameBoard.addEventListener('click', function() {
  makeChoices(makeComputerChoice())
})

function makeChoices(cSelection) {
  var pSelection = event.target.className
  console.log(cSelection)
  currentGame.checkWin(pSelection, cSelection)
  wins.innerText = `Wins: ${currentGame.player1.wins}`
  cWins.innerText = `Wins: ${currentGame.player2.wins}`
}

function makeComputerChoice() {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}
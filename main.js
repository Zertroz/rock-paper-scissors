var gameBoard = document.querySelector('.game-board')
var gameBoardVar = document.querySelector('.game-board-variant')
var wins = document.querySelector('.wins')
var cWins = document.querySelector('.c_wins')
var classicGame = document.querySelector('.classic')
var variantGame = document.querySelector('.variant')
var gameButtons = document.querySelector('.game-buttons')
var subtitle = document.querySelector('h2')
var newGameBtn = document.querySelector('.new-game-btn')
var selectionElements = document.querySelectorAll('.selection')
var gameResult = document.querySelector('.game-result')

var currentGame = new Game

classicGame.addEventListener('click', startClassic)
variantGame.addEventListener('click', startVariant)
gameBoard.addEventListener('click', function() {
  currentGame.makeComputerChoice()
  makeChoices(currentGame.player2.choice)
  setTimeout(resetGameBoard, 2000)
})
gameBoardVar.addEventListener('click', function() {
  currentGame.makeComputerChoice()
  makeChoices(currentGame.player2.choice)
  setTimeout(resetGameBoard, 2000)
})
newGameBtn.addEventListener('click', returnNewGame)

function startClassic() {
  currentGame.setChoices('classic')
  hide(gameButtons)
  show(gameBoard)
  show(newGameBtn)
  subtitle.innerText = 'Choose Your Fighter!'
}

function startVariant() {
  currentGame.setChoices('variant')
  hide(gameButtons)
  show(gameBoardVar)
  show(newGameBtn)
  subtitle.innerText = 'Choose Your Fighter!'
}

function makeChoices(cSelection) {
  var pSelection = currentGame.makePlayerChoice(event.target.id)
  if (currentGame.choices.includes(pSelection)) {
    currentGame.checkWin(pSelection, cSelection)
  }
  showWinner(pSelection, cSelection)
  displayWin()
}

function showWinner(pSelection, cSelection) {
  if (currentGame.choices.includes(pSelection)) {
    for (var i = 0; i < 8; i++) {
      hide(selectionElements[i])
    }
    var pChoice = document.getElementById(pSelection)
    var cChoice = document.getElementById(cSelection)
    show(pChoice)
    show(cChoice)
    wins.innerText = `Wins: ${currentGame.player1.wins}`
    cWins.innerText = `Wins: ${currentGame.player2.wins}`
  }
}

function displayWin() {
  show(gameResult)
  if (currentGame.result === 'win') {
    gameResult.innerHTML = `<h3>You Won!</h3>`
  } else if (currentGame.result === 'lose') {
    gameResult.innerHTML = `<h3>You Lose!</h3>`
  } else if (currentGame.result === 'draw') {
    gameResult.innerHTML = `<h3>Draw!</h3>`
  }
}

function resetGameBoard () {
  for (var i = 0; i < 8; i++) {
    show(selectionElements[i])
  }
  hide(gameResult)
}

function returnNewGame() {
  show(gameButtons)
  hide(gameBoard)
  hide(newGameBtn)
  hide(gameBoardVar)
  currentGame.resetGameType()
  subtitle.innerText = 'Choose Your Game!'
}

function hide(element) {
  element.classList.add('hidden')
}

function show(element) {
  element.classList.remove('hidden')
}
var gameBoard = document.querySelector('.game-board')
var gameBoardVar = document.querySelector('.game-board-variant')
var wins = document.querySelector('.wins')
var cWins = document.querySelector('.c_wins')
var classicGame = document.querySelector('.classic')
var variantGame = document.querySelector('.variant')
var gameButtons = document.querySelector('.game-buttons')
var subtitle = document.querySelector('.game-message')
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
  subtitle.innerText = '始め！！'
}

function startVariant() {
  currentGame.setChoices('variant')
  hide(gameButtons)
  show(gameBoardVar)
  show(newGameBtn)
  subtitle.innerText = '始め！！'
}

function makeChoices(cSelection) {
  var pSelection
  if (currentGame.choices.includes(event.target.parentNode.id)) {
    pSelection = currentGame.makePlayerChoice(event.target.parentNode.id)
    currentGame.checkWin(pSelection, cSelection)
  } else if (currentGame.choices.includes(event.target.id)) {
    pSelection = currentGame.makePlayerChoice(event.target.id)
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
  if (currentGame.result === 'win') {
    subtitle.innerHTML = `You Won!`
  } else if (currentGame.result === 'lose') {
    subtitle.innerHTML = `You Lose!`
  } else if (currentGame.result === 'draw') {
    subtitle.innerHTML = `Draw!`
  }
}

function resetGameBoard () {
  for (var i = 0; i < 8; i++) {
    show(selectionElements[i])
  }
  subtitle.innerHTML = '始め！！'
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
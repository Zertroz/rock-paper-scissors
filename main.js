var gameBoard = document.querySelector('.game-board')
var gameBoardVar = document.querySelector('.game-board-variant')
var wins = document.querySelector('.wins')
var cWins = document.querySelector('.c_wins')
var classicGame = document.querySelector('.classic')
var variantGame = document.querySelector('.variant')
var gameButtons = document.querySelector('.game-buttons')
var subtitle = document.querySelector('h2')
var newGameBtn = document.querySelector('.new-game-btn')

var currentGame = new Game

classicGame.addEventListener('click', startClassic)
variantGame.addEventListener('click', startVariant)
gameBoard.addEventListener('click', function() {
  makeChoices(makeComputerChoice())
  setTimeout(resetGameBoard, 2000)
})
gameBoardVar.addEventListener('click', function() {
  makeChoices(makeComputerChoice())
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
  var pSelection = event.target.className
  if (currentGame.choices.includes(pSelection)) {
    currentGame.checkWin(pSelection, cSelection)
  }
  if (pSelection === 'rock' || pSelection === 'paper' || pSelection === 'scissors') {
    gameBoard.innerHTML = `
      <p>${pSelection}</p>
      <p>${cSelection}</p>`
    wins.innerText = `Wins: ${currentGame.player1.wins}`
    cWins.innerText = `Wins: ${currentGame.player2.wins}`
  } else if (pSelection === 'samurai' || pSelection === 'shinobi' || pSelection === 'brush' || pSelection === 'oni' || pSelection === 'ronin') {
    gameBoardVar.innerHTML = `
      <p>${pSelection}</p>
      <p>${cSelection}</p>`
    wins.innerText = `Wins: ${currentGame.player1.wins}`
    cWins.innerText = `Wins: ${currentGame.player2.wins}`
  }
  
}

function makeComputerChoice() {
  var computerChoices = currentGame.choices
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

function resetGameBoard () {
  if (currentGame.gameType === 'classic') {
    gameBoard.innerHTML = `<p class="rock">Rock</p>
    <p class="paper">Paper</p>
    <p class="scissors">Scissors</p>`
  } else if (currentGame.gameType === 'variant') {
    gameBoardVar.innerHTML = `<p class="brush">Brush</p>
    <p class="samurai">Samurai</p>
    <p class="ronin">Ronin</p>
    <p class="shinobi">Shinobi</p>
    <p class="oni">Oni</p>`
  }
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
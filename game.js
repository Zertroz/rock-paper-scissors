class Game {
  constructor() {
    this.player1 = new Player("Human", '🤓');
    this.player2 = new Player("Computer", "💻");
    this.gameType;
    this.choices;
    this.result;
  }

  setChoices(gameType) {
    this.gameType = gameType
    if (this.gameType === 'classic') {
      this.choices = ['rock', 'paper', 'scissors'];
    } else if (this.gameType === 'variant') {
      this.choices = ['samurai', 'ronin', 'shinobi', 'oni', 'brush'];
    };
  };

  makePlayerChoice(target) {
    this.player1.choice = target
    return this.player1.choice
  }

  makeComputerChoice() {
    this.player2.choice = this.choices[Math.floor(Math.random() * this.choices.length)]
  }

  runGame(selection, computerChoice) {
    if (selection === computerChoice) {
      this.result = 'draw';
    } else if (selection === 'rock' && computerChoice === 'scissors') {
      this.player1.wins ++
      this.result = 'win';
    } else if (selection === 'paper' && computerChoice === 'rock') {
      this.player1.wins ++
      this.result = 'win';
    } else if (selection === 'scissors' && computerChoice === 'paper') {
      this.player1.wins ++
      this.result = 'win';
    } else {
      this.player2.wins ++
      this.result = "lose";
    }
  }

  runGameVar(selection, computerChoice) {
    if (selection === computerChoice) {
      this.result = 'draw';
    } else if (selection === 'brush' && (computerChoice === 'shinobi' || computerChoice === 'oni')) {
      this.player1.wins ++;
      this.result = 'win';
    } else if (selection === 'samurai' && (computerChoice === 'oni' || computerChoice === 'brush')) {
      this.player1.wins ++;
      this.result = 'win';
    } else if (selection === 'ronin' && (computerChoice === 'samurai' || computerChoice === 'brush')) {
      this.player1.wins ++;
      this.result = 'win';
    } else if (selection === 'oni' && (computerChoice === 'ronin' || computerChoice === 'shinobi')) {
      this.player1.wins ++;
      this.result = 'win';
    } else if (selection === 'shinobi' && (computerChoice === 'samurai' || computerChoice === 'ronin')) {
      this.player1.wins ++;
      this.result = 'win';
    } else {
      this.player2.wins ++;
      this.result = "lose";
    }
  }

  checkWin(pSelection, cSelection) {
    if (this.gameType === 'classic') {
      return this.runGame(pSelection, cSelection);
    } else if (this.gameType === 'variant') {
      return this.runGameVar(pSelection, cSelection);
    };
  };

  resetGameType() {
    this.gameType = '';
    this.choices = '';
    this.result = '';
  }
}
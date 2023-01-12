class Game {
  constructor() {
    this.player1 = new Player("Human", '🤓');
    this.player2 = new Player("Computer", "💻");
    this.gameType;
    this.choices;
  }

  setChoices(gameType) {
    this.gameType = gameType
    if (this.gameType === 'classic') {
      this.choices = ['rock', 'paper', 'scissors'];
    } else if (this.gameType === 'variant') {
      this.choices = ['samurai', 'ronin', 'shinobi', 'oni', 'brush'];
    };
  };

  runGame(selection, computerChoice) {
    if (selection === computerChoice) {
      return 'draw';
    } else if (selection === 'rock' && computerChoice === 'scissors') {
      this.player1.wins ++
      return 'win';
    } else if (selection === 'paper' && computerChoice === 'rock') {
      this.player1.wins ++
      return 'win';
    } else if (selection === 'scissors' && computerChoice === 'paper') {
      this.player1.wins ++
      return 'win';
    } else {
      this.player2.wins ++
      return "lose";
    }
  }

  runGameVar(selection, computerChoice) {
    if (selection === computerChoice) {
      return 'draw';
    } else if (selection === 'brush' && (computerChoice === 'shinobi' || computerChoice === 'oni')) {
      this.player1.wins ++;
      return 'win';
    } else if (selection === 'samurai' && (computerChoice === 'oni' || computerChoice === 'brush')) {
      this.player1.wins ++;
      return 'win';
    } else if (selection === 'ronin' && (computerChoice === 'samurai' || computerChoice === 'brush')) {
      this.player1.wins ++;
      return 'win';
    } else if (selection === 'oni' && (computerChoice === 'ronin' || computerChoice === 'shinobi')) {
      this.player1.wins ++;
      return 'win';
    } else if (selection === 'shinobi' && (computerChoice === 'samurai' || computerChoice === 'ronin')) {
      this.player1.wins ++;
      return 'win';
    } else {
      this.player2.wins ++;
      return "lose";
    }
  }

  checkWin(pSelection, cSelection) {
    if (this.gameType === 'classic') {
      this.runGame(pSelection, cSelection)
    } else if (this.gameType === 'variant') {
      this.runGameVar(pSelection, cSelection)
    }
  }

  resetGameType() {
    this.gameType = '';
    this.choices = '';
  }
}
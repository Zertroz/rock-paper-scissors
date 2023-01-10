class Game {
  constructor() {
    this.player1 = new Player("Human", '🤓');
    this.player2 = new Player("Computer", "💻");
    this.gameType;
  }

  checkWin(selection) {
    var computerChoice = 'paper'
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

  resetGame() {
    this.gameType = '';
  }
}
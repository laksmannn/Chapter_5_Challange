// DOM SELECTOR

const info = document.getElementById("h1");
const uRock = document.getElementById("rock");
const uPaper = document.getElementById("paper");
const uScissors = document.getElementById("scissors");
const cRock = document.getElementById("comp-rock");
const cPaper = document.getElementById("comp-paper");
const cScissors = document.getElementById("comp-scissors");
const refresh = document.getElementById("refresh");
// DOM SELECTOR

// OOP (OBJECT ORIENTED PROGRAMMING)

class Player {
  constructor(yourChoice) {
    if (this.constructor === Player) {
      throw new error(`cannot instantiate abstract class`);
    }

    this.yourChoice = yourChoice;
  }
}

// LOGIC : PLAYER THINK
class Human extends Player {
  constructor(yourChoice) {
    super(yourChoice);
  }

  choose() {
    if (this.yourChoice === "rock") {
      uRock.classList.add("chosen");
    } else if (this.yourChoice === "paper") {
      uPaper.classList.add("chosen");
    } else {
      uScissors.classList.add("chosen");
    }
  }
}

//  END LOGIC : PLAYER THINK

// LOGIC COMPUTER THINK

class Computer {
  constructor() {
    this.pcChoice = this.computerSelection();
  }

  computerSelection() {
    const selection = ["rock", "paper", "scissors"];
    return selection[Math.floor(Math.random() * selection.length)];
  }

  chooseComp() {
    if (this.pcChoice === "rock") {
      cRock.classList.add("chosen");
    } else if (this.pcChoice === "paper") {
      cPaper.classList.add("chosen");
    } else {
      cScissors.classList.add("chosen");
    }
  }
}

// END LOGIC COMPUTER THINK

//LOGIC GAMEPLAY

class Gameplay extends Computer {
  constructor(yourChoice) {
    super();
    this.yourChoice = yourChoice;
    this.pcChoice = this.computerSelection();
    this.result = this.gameRules(this.yourChoice, this.pcChoice);
  }
  gameRules(yourChoice, drawComputer) {
    if (
      (yourChoice === "rock" && drawComputer === "scissors") ||
      (yourChoice === "scissors" && drawComputer === "paper") ||
      (yourChoice === "paper" && drawComputer === "rock")
    )
      return "player 1 win";
    else if (
      (yourChoice === "scissors" && drawComputer === "rock") ||
      (yourChoice === "paper" && drawComputer === "scissors") ||
      (yourChoice === "rock" && drawComputer === "paper")
    )
      return "com win";
    else return "draw";
  }

  // END LOGIC GAMEPLAY

  //WIN DRAW BOX METHOD

  winLoseDrawBox() {
    info.classList.add("drawbox2");
    info.style.fontSize = "36px";
    info.style.padding = "50px";
    info.style.color = "white";
    info.innerHTML = this.result;
  }

  // END WIN DRAW BOX METHOD

  cursorOff() {
    uRock.classList.add("onoff");
    uPaper.classList.add("onoff");
    uScissors.classList.add("onoff");
  }
}

//END LOGIC GAMEPLAY

// END OF OOP (OBJECT ORIENTED PROGRAMMING)

const humanRock = new Human("rock");
const playRock = new Gameplay("rock");

console.log(playRock);

uRock.addEventListener("click", function () {
  humanRock.choose();
  playRock.chooseComp();
  playRock.winLoseDrawBox();
  playRock.cursorOff();
});

const humanPaper = new Human("paper");
const playPaper = new Gameplay("paper");

console.log(playPaper);

uPaper.addEventListener("click", function () {
  humanPaper.choose();
  playPaper.chooseComp();
  playPaper.winLoseDrawBox();
  playPaper.cursorOff();
});

const humanScissors = new Human("scissors");
const playScissors = new Gameplay("scissors");

console.log(playScissors);

uScissors.addEventListener("click", function () {
  humanScissors.choose();
  playScissors.chooseComp();
  playScissors.winLoseDrawBox();
  playScissors.cursorOff();
});

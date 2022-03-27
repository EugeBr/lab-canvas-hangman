class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = "secretWord";
    this.letters = [];
    this.guessedLetters = "";
    this.errorsLeft = 10;
  }

  pickWord() {
    let randomWord = this.words[Math.floor(Math.random()* this.words.length)];
    return randomWord;
  }

  checkIfLetter(keyCode) {
    if (keyCode >= '65' && keyCode <= '90'){
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(letter) {
   if (this.letters.indexOf(letter) === -1) {
     return true;
   } else {
     return false;
   }
  }

  addCorrectLetter(letter) {  
      this.guessedLetters += letter;   
  }

  addWrongLetter(letter) {
    this.errorsLeft --;
    if (this.letters.indexOf(letter) === -1) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    if (this.errorsLeft > 0) {
      return false;
    } else {
      return true;
    }
  }

  checkWinner() {
    for(let i = 0; i < this.secretWord.length; i++) {
      if(this.guessedLetters.indexOf(this.secretWord[i]) === -1) {
        return false;
      } else {
        return true;
      }
    }
  }  

}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
     hangman.secretWord = hangman.pickWord();
     hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    // ... your code goes here

  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
  const letter = event.key;
  // console.log(letter);
    if (hangman.letters.includes(letter)) {
      console.log("you already tried that letter!");
    } 
    if (hangman.secretWord.includes(letter)) {
      console.log("correct letter!");
      hangman.addCorrectLetter(letter);
      const letterIndex = hangman.secretWord.indexOf(letter);
     // console.log(letterIndex);
      hangmanCanvas.writeCorrectLetter(letterIndex);
    }
    else {
      console.log("wrong letter!")
      hangman.addWrongLetter(letter);
      hangmanCanvas.writeWrongLetter(letter, hangman.errorsLeft);
    }
  

});

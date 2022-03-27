class HangmanCanvas {
  constructor(secretWord) {
    this.canvas = document.getElementById('hangman');
    this.ctx = this.canvas.getContext('2d');

    // ... your code goes here
    this.secretWord = secretWord;
    console.log(this.secretWord);
    this.createBoard();
  }

  createBoard() {
    // ... your code goes here
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.heiht);
    this.drawLines();
  }

  drawLines() {
    // ... your code goes here
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.fillRect(400 + i * 80, 700, 50, 5);
    }
  }

  writeCorrectLetter(index) {
    this.ctx.font = "small-caps 60px Arial";
    this.ctx.fillText(this.secretWord[index], 400 + (index * 80), 650);
  }

  writeWrongLetter(letter, errorsLeft) {
  //console.log(errorsLeft);
    this.ctx.font = "small-caps 60px Arial";
    this.ctx.fillText(letter, 750 + (errorsLeft * 40), 250);
    this.drawHangman(errorsLeft);
  }

  drawHangman(errorsLeft) {
    console.log(errorsLeft);
   // console.log('drawing!');
    switch (errorsLeft) {
      case 9: 
        this.ctx.fillRect(0, 700, 250, 5);
    break;
      case 8:
        this.ctx.beginPath();
        this.ctx.moveTo(0, 700);
        this.ctx.lineTo(125, 600); 
        this.ctx.lineWidth = 5;
        this.ctx.stroke();
    break;
      case 7: 
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(250, 700);
        this.ctx.lineTo(125, 600); 
        this.ctx.stroke();
    break;
      case 6:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(125, 600);
        this.ctx.lineTo(125, 100); 
        this.ctx.stroke();
    break;
      case 5: 
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(125, 100);
        this.ctx.lineTo(500, 100); 
        this.ctx.stroke();
    break;
      case 4:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(500, 100);
        this.ctx.lineTo(500, 150);  
        this.ctx.stroke();
    break;
      case 3:
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.arc(500, 200, 50, 0, 2 * Math.PI);
        this.ctx.stroke();
    break;
      case 2: 
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(500, 250);
        this.ctx.lineTo(500, 430);  
        this.ctx.stroke();
    break;
      case 1:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(500, 430);
        this.ctx.lineTo(600, 550);  
        this.ctx.stroke(); 
    break;
      case 0:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(500, 430);
        this.ctx.lineTo(400, 550);  
        this.ctx.stroke(); 
    break; 
    default:
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

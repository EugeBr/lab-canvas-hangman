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
    this.ctx.fillStyle = "black";
    for (let i = 0; i < this.secretWord.length; i++) {
      this.ctx.fillRect(400 + i * 80, 700, 50, 5);
    }
  }

  writeCorrectLetter(index) {
    this.ctx.font = "60px Arial";
    this.ctx.fillText(this.secretWord[index], 400 + (index * 80), 650);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.ctx.font = "60px Arial";
    this.ctx.fillText(letter, 750 + (errorsLeft * 40), 250);
  }

  drawHangman(errorsLeft) {
    console.log('drawing!')
    switch(errorsLeft){
      case 9: 
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(100, 700, 150, 5);
    break;
      case 8:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(100, 700);
        this.ctx.lineTo(125, 600); 
    break;
      case 7: 
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(250, 700);
        this.ctx.lineTo(125, 600); 
    break;
      case 6:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(125, 600);
        this.ctx.lineTo(125, 150); 
    break;
      case 5: 
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(125, 150);
        this.ctx.lineTo(700, 150); 
    break;
      case 4:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(700, 150);
        this.ctx.lineTo(700, 200);  
    break;
      case 3:
        this.ctx.lineWidth = 5;
       //!circle
    break;
      case 2: 
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(700, 300);
        this.ctx.lineTo(700, 450); 
    break;
      case 1:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(700, 450);
        this.ctx.lineTo(600, 550);  
    break;
      case 1:
        this.ctx.lineWidth = 5;
        this.ctx.moveTo(700, 450);
        this.ctx.lineTo(800, 550);  
    }
  }

  gameOver() {
    // ... your code goes here
  }

  winner() {
    // ... your code goes here
  }
}

const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null, prevGuesses: [],
  play: function(num) {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;

    if(num === this.secretNum) {
      this.prevGuesses.push(num);
      alert('Wow Congrats! You guessed the number right away');
  }
  else {
      while (num !== this.secretNum) {
          if (num > this.secretNum)
              alert('Your guess is too high');
          else if(num<this.secretNum)
              alert('Your guess is too low');
          this.prevGuesses.push(num);
          num = this.getGuess();
      }
      alert('Congrats! You guessed the number in ' + this.prevGuesses.length + ' guesses!\n' +
          'Previous guesses: ' + this.prevGuesses.join());
  }
  },
  getGuess: function(){
      let number = prompt('Enter a guess between '+ this.smallestNum+ ' and '+this.biggestNum)
  if (number >= this.smallestNum && number <= this.biggestNum) {
    return parseInt(number);
  }
  },
  render: function(){
   let number = this.getGuess();
   this.play(number);
  }
};
var game = {
  attempts: 5,

  words: [
    'Apple',
    'Banana',
    'Cranberry',
    'Grape',
    'Cherry',
    'Orange',
    'Mango'
  ],

  guessList: [],
  wins: 0,
  gamePlayed: 0,

  getWord: function(){
   return this.words[Math.floor(Math.random() * this.words.length)];
  },

  // Resets attempts and guessList for new game
  reset: function(){
    this.attempts = 5;
    this.guessList = [];
  }
};

var word = 'testword';
word = word.toUpperCase();


document.addEventListener("DOMContentLoaded", function(){

  const gameInfo = document.getElementById('game-info');
  gameInfo.textContent = 'Press any key to start.';

  const attempts = document.getElementById('attempts');
  attempts.textContent = game.attempts + ' attempts left.';

  const blanks =  document.getElementById('blanks');
  const guessList = document.getElementById('guessList');



  //var word = game.getWord(); //- ReferenceError: word is not defined
  for(i=0; i<word.length; i++){
    var newSpan = document.createElement('span');
    newSpan.textContent = '_';
    blanks.appendChild(newSpan);

  }

  document.onkeydown = (function(event){
    var letter = event.key.toUpperCase();

    // Only alphabetical keys logged
    if(event.key == 'a' || event.key == 'b' || event.key == 'c' || event.key == 'd' || event.key == 'e'
      || event.key == 'f' || event.key == 'g' || event.key == 'h' || event.key == 'i' || event.key == 'j'
      || event.key == 'k' || event.key == 'l' || event.key == 'm' || event.key == 'n' || event.key == 'o'
      || event.key == 'p' || event.key == 'q' || event.key == 'r' || event.key == 's' || event.key == 't'
      || event.key == 'u' || event.key == 'v' || event.key == 'w' || event.key == 'x' || event.key == 'y'
      || event.key == 'z')
      {
        // Continue if attempts are greater than 0
        if(game.attempts > 0){
          // Check if letter is in guess list, if so do nothing.
          if(game.guessList.includes(letter)){
            gameInfo.textContent = 'You already guessed "' + letter + '"!';
          }
          // If letter is not in guess list, continue
          else{
            // Check it letter is in word
            if(word.includes(letter)){
              // Get Blank class spans

              //place guess in guess list
              game.guessList.push(letter);
              for(i=0; i<word.length; i++){//Check each letter of the word
                var fill = document.getElementById('blanks').childNodes[i];

                if(letter == word[i]){//and if the guess and letter match
                    fill.textContent = letter;        //place the guess in the span
                }
              }
              // Update DOM
              guessList.textContent = game.guessList.join(', ');
              gameInfo.textContent = letter + ' is in word.';
              attempts.textContent = game.attempts + ' attempts left.';

            }
            // If letter is not in word
            else{
              game.attempts--;// decrement 1 from attempts
              game.guessList.push(letter);      //place guess in guess list
              // Update DOM
              guessList.textContent = game.guessList.join(', ');// update guesslist on DOM
              gameInfo.textContent = letter + ' is not in word.'; // Let user know they are wrong on DOM
              attempts.textContent = game.attempts + ' attempts left.';// update attempts on DOM
            }
          }
        }
        // If attempts are 0 or less discontinue
        else{
           gameInfo.textContent = 'You lost! Press any key to start again.';
          // game.reset();
        }
      }
  });
});

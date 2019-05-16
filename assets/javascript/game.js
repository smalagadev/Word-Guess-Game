const game = {
  attempts: 10,

  videos: [
    lakai= {name:'FULLY FLARED', logo:'assets/images/lakai.png'},
    adidas= {name:'AWAY DAYS', logo:'assets/images/adidas.png'},
    vans= {name:'PROPELLOR', logo:'assets/images/vans.png'},
    magenta= {name:'BALADE', logo:'assets/images/magenta.jpeg'},
    bronze= {name:'ITS TIME', logo:'assets/images/bronze.png'},
    baker= {name:'BAKE AND DESTROY', logo:'assets/images/baker.png'},
    deathwish= {name:'THE DEATHWISH VIDEO', logo:'assets/images/deathwish.jpg'},
    enjoi= {name:'BAG OF SUCK', logo:'assets/images/enjoi.png'},
    palace= {name:'PALASONIC', logo:'assets/images/palace.png'},
    pyramid_country= {name:'EXETER', logo:'assets/images/pyramid-country.png'},
    real= {name:'SINCE DAY ONE', logo:'assets/images/real.png'},
    fallen= {name:'RIDE THE SKY', logo:'assets/images/fallen.png'},
    worble= {name:'TOXIC PLANET', logo:'assets/images/worble.jpeg'},
    transworld= {name:'AND NOW', logo:'assets/images/transworld.jpeg'},
    welcome= {name:'FETISH', logo:'assets/images/welcome.png'},
    wknd= {name:'SIR PALMER', logo:'assets/images/wknd.jpg'},
    dime= {name:'DIME TURD SEASON', logo:'assets/images/dime.jpeg'},
    emerica= {name:'STAY GOLD', logo:'assets/images/emerica.png'},
    real= {name:'SINCE DAY ONE', logo:'assets/images/real.png'},
    zero= {name:'COLD WAR', logo:'assets/images/zero.png'}
  ],

  guessList: [],
  wins: 0,
  gamesPlayed: 0,

  getVideo: function(){
   return this.videos[Math.floor(Math.random() * this.videos.length)];
  },



  // Resets attempts and guessList for new game
  reset: function(){
    this.attempts = 10;
    this.guessList = [];
  }
};

var word = game.getVideo();

var getBlanks = function() {
  clearBlanks();
  for(i=0; i<word.name.length; i++){
    var newSpan = document.createElement('span');
    newSpan.textContent = '_';
    newSpan.classList.add("place-holder", "display-3");
    blanks.appendChild(newSpan);
  }
}

var clearBlanks = function() {
  const blanks = document.getElementById('blanks');
  while(blanks.firstChild){
    blanks.removeChild(blanks.firstChild);
  }
}

var guessedCorrect = function(){
  var blanks = document.getElementsByClassName('place-holder');
  for(i=0; i<word.name.length; i++){
    console.log(i);
    if(word.name[i] != blanks[i].textContent)// if no match
    {
      return false;
    }
  }
  return true;
}

document.addEventListener("DOMContentLoaded", function(){

  const gameInfo = document.getElementById('game-info');
  gameInfo.textContent = 'Press any key to start.';

  const attempts = document.getElementById('attempts');
  attempts.textContent = game.attempts;

  const blanks =  document.getElementById('blanks');
  const guessList = document.getElementById('guessList');
  const logo = document.getElementById('logo');
  logo.setAttribute('src', word.logo);

  getBlanks();

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
        if(game.attempts > 0 && !guessedCorrect()){
          // Check if letter is in guess list, if so do nothing.
          if(game.guessList.includes(letter)){
            gameInfo.textContent = 'You already guessed "' + letter + '"!';
          }
          // If letter is not in guess list, continue
          else{
            // Check if letter is in word
            if(word.name.includes(letter)){
              //place guess in guess list
              game.guessList.push(letter);
              for(i=0; i<word.name.length; i++){//Check each letter of the word
                var fill = document.getElementById('blanks').childNodes[i];

                if(letter == word.name[i]){//and if the guess and letter match
                    fill.textContent = letter;        //place the guess in the span
                }
              }
              // Update DOM
              guessList.textContent = game.guessList.join(', ');
              gameInfo.textContent = letter + ' is in word.';
              attempts.textContent = game.attempts;
              if(guessedCorrect()){
                game.attempts = 0;
                gameInfo.textContent = 'You won! Press any key to play again.';
                game.wins++;
                game.gamesPlayed++;
              }

            }
            // If letter is not in word
            else{
              game.attempts--;// decrement 1 from attempts
              game.guessList.push(letter);      //place guess in guess list
              // Update DOM
              guessList.textContent = game.guessList.join(', ');// update guesslist on DOM
              gameInfo.textContent = letter + ' is not in word.'; // Let user know they are wrong on DOM
              attempts.textContent = game.attempts;// update attempts on DOM
            }
          }
        }
        // If attempts are 0 or less discontinue
        else if(game.attempts <= 0 && !guessedCorrect()){
           gameInfo.textContent = 'You lost! Press any key to start again.';
           game.gamesPlayed++;
           game.reset();
           word = game.getVideo();
           logo.setAttribute('src', word.logo);
           getBlanks();
        }
        else if(game.attempts == 0 && guessedCorrect()){
          game.reset();
          word = game.getVideo();
          logo.setAttribute('src', word.logo);
          getBlanks();
        }
      }
  });
});

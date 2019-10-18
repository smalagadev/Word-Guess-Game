import React from 'react';
import Counter from './components/Counter';
import Message from './components/Message';
import Hint from './components/Hint';
import Blanks from './components/Blanks';
import Guessed from './components/Guessed';
import game from './utils/game.js';
import videos from './utils/videos.json';
import './App.css';

// const getBlanks = function() {
//   clearBlanks();
//   for(i=0; i<word.name.length; i++){
//     var newSpan = document.createElement('span');
//     newSpan.textContent = '_';
//     newSpan.classList.add("place-holder", "display-3");
//     blanks.appendChild(newSpan);
//   }
// }
//
// const clearBlanks = function() {
//   const blanks = document.getElementById('blanks');
//   while(blanks.firstChild){
//     blanks.removeChild(blanks.firstChild);
//   }
// }
//
// const guessedCorrect = function(){
//   var blanks = document.getElementsByClassName('place-holder');
//   for(i=0; i<word.name.length; i++){
//     console.log(i);
//     if(word.name[i] != blanks[i].textContent)// if no match
//     {
//       return false;
//     }
//   }
//   return true;
// }
//
// document.addEventListener("DOMContentLoaded", function(){
//
//   const gameInfo = document.getElementById('game-info');
//   gameInfo.textContent = 'Press any key to start.';
//
//   const attempts = document.getElementById('attempts');
//   attempts.textContent = game.attempts;
//
//   const blanks =  document.getElementById('blanks');
//   const guessList = document.getElementById('guessList');
//   const logo = document.getElementById('logo');
//   logo.setAttribute('src', word.logo);
//
//   getBlanks();
//
//   document.onkeydown = (function(event){
//     var letter = event.key.toUpperCase();
//
//
//     // Only alphabetical keys logged
//     if(event.key == 'a' || event.key == 'b' || event.key == 'c' || event.key == 'd' || event.key == 'e'
//       || event.key == 'f' || event.key == 'g' || event.key == 'h' || event.key == 'i' || event.key == 'j'
//       || event.key == 'k' || event.key == 'l' || event.key == 'm' || event.key == 'n' || event.key == 'o'
//       || event.key == 'p' || event.key == 'q' || event.key == 'r' || event.key == 's' || event.key == 't'
//       || event.key == 'u' || event.key == 'v' || event.key == 'w' || event.key == 'x' || event.key == 'y'
//       || event.key == 'z')
//       {
//         // Continue if attempts are greater than 0
//         if(game.attempts > 0 && !guessedCorrect()){
//           // Check if letter is in guess list, if so do nothing.
//           if(game.guessList.includes(letter)){
//             gameInfo.textContent = 'You already guessed "' + letter + '"!';
//           }
//           // If letter is not in guess list, continue
//           else{
//             // Check if letter is in word
//             if(word.name.includes(letter)){
//               //place guess in guess list
//               game.guessList.push(letter);
//               for(i=0; i<word.name.length; i++){//Check each letter of the word
//                 var fill = document.getElementById('blanks').childNodes[i];
//
//                 if(letter == word.name[i]){//and if the guess and letter match
//                     fill.textContent = letter;        //place the guess in the span
//                 }
//               }
//               // Update DOM
//               guessList.textContent = game.guessList.join(', ');
//               gameInfo.textContent = letter + ' is in word.';
//               attempts.textContent = game.attempts;
//               if(guessedCorrect()){
//                 game.attempts = 0;
//                 gameInfo.textContent = 'You won! Press any key to play again.';
//                 game.wins++;
//                 game.gamesPlayed++;
//               }
//
//             }
//             // If letter is not in word
//             else{
//               game.attempts--;// decrement 1 from attempts
//               game.guessList.push(letter);      //place guess in guess list
//               // Update DOM
//               guessList.textContent = game.guessList.join(', ');// update guesslist on DOM
//               gameInfo.textContent = letter + ' is not in word.'; // Let user know they are wrong on DOM
//               attempts.textContent = game.attempts;// update attempts on DOM
//             }
//           }
//         }
//         // If attempts are 0 or less discontinue
//         else if(game.attempts <= 0 && !guessedCorrect()){
//            gameInfo.textContent = 'You lost! Press any key to start again.';
//            game.gamesPlayed++;
//            game.reset();
//            word = game.getVideo();
//            logo.setAttribute('src', word.logo);
//            getBlanks();
//         }
//         else if(game.attempts == 0 && guessedCorrect()){
//           game.reset();
//           word = game.getVideo();
//           logo.setAttribute('src', word.logo);
//           getBlanks();
//         }
//       }
//   });
// });


class App extends React.Component {
  state = {
    video: { ...game.getVideo(videos)}, /*Spread Syntax*/
    attempts: game.attempts
  };


  /*Change to keydown*/
  handleDecrement = () => {
    this.setState({ attempts: this.state.attempts - 1});
  };

  render(){
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="navbar-brand" href="#">Skate Video Guessing Game</div>
        </nav>

      <div className="container-fluid row">
        <div className="card col-md-4">
          <Hint />
          <div className="card-body">
            <Message />
          </div>
        </div>
        <div className="col-md-8 row">

          <div className="col-md-3 card">
            <Counter attempts={ this.state.attempts } handleDecrement={ this.handleDecrement }/>
          </div>

          <div className="col-md-9 card">
            <div className="card-header">Letters used:</div>
            <div className="card-body display-4" id="guessList"></div>
            <Guessed />
          </div>

          <div className="col-md-12 card">
            <div className="card-body" id="blanks">
              <Blanks answer={ this.state.video.name } />
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;

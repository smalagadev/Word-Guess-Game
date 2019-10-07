import React from 'react';
import './App.css';

function App() {
  return (
    <>
    {/*Navigation bar as a header bar */}
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-brand">Skate Video Guessing Game</div>
      <div class="navbar-brand">Attempts: <span class="badge badge-pill badge-light" id="attempts"></span></div>
    </nav>

  {/*Display*/}
    <div class="card mb-3 container-fluid">
      <div class="row no-gutters">
        <div class="col-md-4">
          <img src="" class="card-img"  id="logo" alt="logo" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title card-header text-center" id="game-info">Deletethistext</h5>
            <div class="card-body" id="blanks"></div>
            <hr />
            <small class="card-header container-fluid text-center">Letters used:</small>
            <small class="card-body" id="guessList"></small>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

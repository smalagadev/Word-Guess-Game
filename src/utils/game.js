export default {
  attempts: 10,

  guessList: [],
  wins: 0,
  gamesPlayed: 0,

  getVideo: function(videos){
   return videos[Math.floor(Math.random() * videos.length)];
  },

  // Resets attempts and guessList for new game
  reset: function(){
    this.attempts = 10;
    this.guessList = [];
  }
};

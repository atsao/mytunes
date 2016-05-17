// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    // different event?
      this.on('add', this.playFirst, this);
  },

  playFirst: function() {
    if (this.length > 0 ) {

    } else {

    this.models[0].play(); // change to use to get/set
    }
  },


});

var songData = [
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3",
    title: "Age Ain't Nothing But A Number",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
    title: "Hot Like Fire",
    artist: "Aaliyah",
  },
  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
    title: "If Your Girl Only Knew",
    artist: "Aaliyah",
  }
];


// var testSongs = new Songs(songData);
// console.log("testSongs: ", testSongs);

var testSongQueue = new SongQueue(songData);
console.log("testSongQ: ", testSongQueue);

var testSong = {
    url: "sadfs://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
    title: "If asdf Girl Only Knew",
    artist: "asdf",
  };

testSongQueue.add(testSong);
console.log("testSongQ: ", testSongQueue);

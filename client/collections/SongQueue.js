// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // Listen for any time queue is added to
    this.on('enqueue', this.add, this);
    this.on('add', this.decideWhetherToPlay, this);
    // NOTE: can't use 'this.remove, this' here, because the test on line 45 in the spec doesn't pass in a second parameter. Hence we have to create our own removeFirstSong function instead.
    this.on('ended', this.removeFirstSong);
    this.on('dequeue', this.remove, this);
    this.on('remove', this.decideWhetherToPlay, this);
  },

  // Hears an add event
  // Decides whether to call playFirst() or not
  decideWhetherToPlay: function(song) {
    var queue = this;

    // If there's one song in the queue (means there was nothing in queue before add)
    if (queue.length === 1) {
      // Call playFirst method of the queue passing in song
      queue.playFirst();
    }

    // else {
    //   song.play();
    // }
  },

  playFirst: function() {
    var queue = this;
    // Will only be triggered when a song is added to a previously empty queue
    queue.first().play();
  },

  removeFirstSong: function() {
    var queue = this;
    // Remove acts on the collection (this) and takes a model as a parameter
    queue.remove(queue.first());
  },




});

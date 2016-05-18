// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // Listen for any time queue is added to
    // this.on('enqueue', this.model.add, this);
    // this.on('add', this.decideWhetherToPlay, this);
    // // NOTE: can't use 'this.remove, this' here, because the test on line 45 in the spec doesn't pass in a second parameter. Hence we have to create our own removeFirstSong function instead.
    // this.on('ended', this.removeFirstSong);
    // this.on('dequeue', this.remove, this);
    // this.on('remove', this.decideWhetherToPlay, this);
    this.on('add', this.enqueue, this);
    // this.on('dequeue', this.dequeue, this);
    this.on('dequeueQueue', this.dequeueQueue, this);
    this.on('dequeuePlaylist', this.dequeuePlaylist, this);
    this.on('ended', this.playNext, this);
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

  // playFirst: function() {
  //   var queue = this;
  //   // Will only be triggered when a song is added to a previously empty queue
  //   queue.first().play();
  // },

  removeFirstSong: function() {
    var queue = this;
    // Remove acts on the collection (this) and takes a model as a parameter
    queue.remove(queue.first());
  },

  enqueue: function(song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  // dequeue: function(song) {
  //   if (this.at(0) === song) {
  //     this.playNext();
  //   } else {
  //     this.remove(song);
  //   }
  // },

  dequeueQueue: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  dequeuePlaylist: function(song) {
    if (this.at(0) === song) {
      this.playNext();
    } else {
      this.remove(song);
    }
  },

  playFirst: function() {
    this.at(0).play();
  },

  playNext: function() {
    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }




});

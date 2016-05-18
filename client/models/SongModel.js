// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    playCount: 0
  },

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    // this = context of song that emits the 'play' event
    this.trigger('play', this);
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('playCountChanged', this);
  },

  ended: function() {
    // Adjust to account for song length (time) and user pausing?
    this.trigger('ended', this);
    // this.trigger('dequeue', this);
  },

  // enqueue: function(queueName) {
  //   this.trigger('enqueue', this, queueName);
  // },

  enqueueQueue: function() {
    this.trigger('enqueueQueue', this);
  },

  enqueuePlaylist: function() {
    this.trigger('enqueuePlaylist', this);
  },

  dequeueQueue: function() {
    this.trigger('dequeueQueue', this);
  },

  dequeuePlaylist: function() {
    this.trigger('dequeuePlaylist', this);
  },

});

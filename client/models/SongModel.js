// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    // this = context of song that emits the 'play' event
    this.trigger('play', this);
  },

  ended: function() {
    // Adjust to account for song length (time) and user pausing?
    this.trigger('ended', this);
    this.trigger('dequeue', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }

});

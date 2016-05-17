// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    console.log("calling play SongModel: ");
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    // this = context of song that emits the 'play' event
    this.trigger('play', this);
  },

  ended: function() {
    // Adjust to account for song length (time) and user pausing?
    this.trigger('ended', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  }

});

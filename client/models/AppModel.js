// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    console.log(params);
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    // When a song is played (.play() method of an instance of Song model is called), it emits a 'play' event.
    // Creates a listener for 'play' event on each Song instance in the Songs collection
    // If it hears the 'play' event, changes currentSong to the song that triggered the 'play' event
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
  }

});

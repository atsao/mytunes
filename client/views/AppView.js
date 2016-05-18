// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    // Sets playerView property as a new instance of the PlayerView view, setting 'model' property of the new instance to be the instance of Song model which is the currentSong    
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    
    // Sets libraryView property as a new instance of the libraryView view, setting 'collection' property of the new instance to be the Songs collection
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    this.songQueueView = new SongQueueView({
      collection: this.model.get('songQueue'),
      name: 'Queue'
    });

    this.playlistOne = new SongQueueView({
      collection: this.model.get('playlist'),
      name: 'Playlist'
    });


    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      // Invokes the setSong method on the playerView property (which is an instance of PlayerView), passing in the instance of Song model which is the current song
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function(){
    // this = appView (instance of AppView view)
    // this.$el = Backbone placeholder for templated content
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      this.playlistOne.$el
    ]);
  }

});

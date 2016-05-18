// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %> (<%= this.model.get("playCount") %>) - <button class="btn-queue">Add to Queue</button> - <button class="btn-playlist">Add to Playlist</button></td>'),

  events: {
    'click .btn-queue': function() {
      // this.model.play();
      // this.model.enqueue();
      this.model.enqueueQueue();
      this.render();
    },
    'click .btn-playlist': function() {
      // this.model.play();
      // this.model.enqueue();
      console.log('clicking add to playist');
      this.model.enqueuePlaylist();
      this.render();
    },
    'change:playCount': function() {
      this.render();
    }
  },

  render: function(){
    // console.log('attr', this.model.attributes);
    return this.$el.html(this.template(this.model.attributes));
  }

});

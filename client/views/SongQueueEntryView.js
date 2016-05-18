// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="<%= this.options.name %>">(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click .Playlist': function() {
      this.model.dequeuePlaylist();
    },
    'click .Queue': function() {
      this.model.dequeueQueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
  
});

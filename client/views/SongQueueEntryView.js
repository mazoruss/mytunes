// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  template: _.template(

      `<a href="#" class="list-group-item">
        <h4 class="list-group-item-heading"><%= artist %></h4>
        <p class="list-group-item-text"><%= title %></p>
      </a>`
    ),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },
  
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});

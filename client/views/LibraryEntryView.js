// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  // tagName: 'tr',

  // template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  template: _.template(

      `<a href="#" class="list-group-item">
        <h4 class="list-group-item-heading"><%= artist %></h4>
        <p class="list-group-item-text"><%= title %></p>
      </a>`
    ),

  events: {
    'click': function() {
      this.model.enqueue();
    },
    // 'mouseover': 'mouseovercard'
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  },

  mouseovercard: function(event) {
    $(event.currentTarget).find('.list-group-item').toggleClass('active');
  }


});

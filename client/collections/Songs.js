// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  url: 'https://api.parse.com/1/classes/songs/',

  method: 'GET',

  initialize: function() {
    this.fetch();
    // setTimeout(() => console.log(this), 1000);
  },

  parse: function(response) {
    return response.results;
  }


});
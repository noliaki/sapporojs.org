Sapporojs.Blog = Ember.Object.extend({
});

Sapporojs.Blog.reopenClass({
  _content: Ember.A(),

  load: function(json) {
    var content = Sapporojs.Blog._content;
    var forEach = Ember.ArrayPolyfills.forEach;

    forEach.call(json, function(blogData) {
      var blog = Sapporojs.Blog.create(blogData);

      content.pushObject(blog);
    });
  },

  all: function() {
    return this._content;
  }
});

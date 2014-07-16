import Ember from 'ember';

var Router = Ember.Router.extend({
  location: McNormalModeENV.locationType
});

Router.map(function() {
  this.resource('articles', {path: '/'});
  this.route('article', {path: '/articles/:id'});
  this.route('new-article', {path: '/articles/new'});
  this.route('edit-article', {path: '/articles/:id/edit'});
});

export default Router;

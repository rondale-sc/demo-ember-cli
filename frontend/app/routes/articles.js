import Ember from 'ember';

var ArticlesRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('article');
  }
});

export default ArticlesRoute;

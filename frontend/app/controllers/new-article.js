import Ember from 'ember';

export default Ember.Controller.extend({
  body: null,
  title: null,
  actions: {
    submit: function() {
      var attrs = this.getProperties('title', 'body');
      var article = this.store.createRecord('article', attrs);
      var routeContext = this;

      var successHandler = function(){
        routeContext.transitionTo('articles');
        routeContext.setProperties({title: null, body: null});
      };

      var errorHandler = function(err){
        console.log(err);
      };

      article.save().then(successHandler).catch(errorHandler);
    }
  }
});

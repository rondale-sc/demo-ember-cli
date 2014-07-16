import Ember from 'ember';

export default Ember.Controller.extend({
  body: null,
  title: null,
  actions: {
    submit: function() {
      var attrs = this.getProperties('title', 'body');
      var article = this.store.createRecord('article', attrs);

      var successHandler = function(){
        this.transitionTo('articles');
        this.setProperties({title: null, body: null});
      }.bind(this);

      var errorHandler = function(err){
        console.log(err);
      };

      article.save().then(successHandler).catch(errorHandler);
    }
  }
});

import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      var attrs = this.getProperties('title', 'body');
      var article = this.get('model').setProperties(attrs);

      var successHandler = function(){
        this.transitionTo('articles');
      }.bind(this);

      var errorHandler = function(e) {
        console.log(e);
      };

      article.save().then(successHandler, errorHandler);
    }
  }
});

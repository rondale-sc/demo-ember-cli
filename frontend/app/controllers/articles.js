import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    deleteArticle: function(article) {
      article.deleteRecord();
      article.save();
    }
  }
});

import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['id'],
  actions: {
    deleteArticle: function(article) {
      article.deleteRecord();
      article.save();
    }
  }
});

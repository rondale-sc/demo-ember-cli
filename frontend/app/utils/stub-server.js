export default function(){
  var articles = [{
    'id': 1,
    'title': 'Trip to outer space!',
    'body': 'This is the body.'
  }];

  this.get('/api/articles', function() {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({articles: articles})];
  });

  this.get('/api/articles/1', function() {
    return [200, {"Content-Type": "application/json"}, JSON.stringify({article: articles[0]})];
  });

  this.post('/api/articles', function() {
    return [200, {"Content-Type": "application/json"}, {article: articles[0]}];
  });

  this.delete('/api/articles', function(){
    return [204, {}, ""];
  });

  this.put('/api/articles/:id', function() {
    return [204, {}, ""];
  });
}

import startApp from 'mc-normal-mode/tests/helpers/start-app';
import stubServer from 'mc-normal-mode/utils/stub-server';
import Ember from 'ember';

var App;
var server;

module('acceptance:user-views-article-index', {
  setup: function() {
    App = startApp();
    server = new Pretender(stubServer);
  },
  teardown: function() {
    Ember.run(App, App.destroy);
    server.shutdown();
  }
});

test('Expect index title to be set appropriately', function() {
  expect(1);

  visit('/');
  andThen(function(){
    ok(/McNormal Mode's Articles/.test(find('h1').text()));
  });
});

test('Expect articles to exist', function() {
  expect(1);

  visit('/');
  andThen(function(){
    ok(/Trip to outer space!/.test(find('li').text()));
  });
});

test('Expect clicked article to transition to show', function() {
  expect(3);

  visit('/').then(function(){
    click('li a:contains("Trip to outer space!")');
  });

  andThen(function(){
    equal(currentURL(), '/articles/1');
    ok(/Trip to outer space!/.test(find('h1').text()), "String failed to match");
    equal("This is the body.", find('p').text());
  });
});

test('Expect a form when you follow new', function() {
  expect(1);
  visit('/').then(function(){
    click('a:contains("new article")');
  });

  andThen(function() {
    ok(find('form').length > 0, "form not found");
  });
});

test('creating new article', function(){
  expect(2);

  visit('/').then(function(){
    click('a:contains("new article")');
  }).then(function() {
    fillIn('textarea', 'blogger');
    fillIn('input', 'Lawnmower man');
    click('button');
  }).then(function(){
    equal(currentURL(), '/');
    ok(/Lawnmower man/.test(find('li').text()));
  });
});

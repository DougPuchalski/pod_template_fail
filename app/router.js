var Router = Ember.Router.extend({
  location: 'auto'
});

Router.map(function() {
  this.resource('pass', {path: '/pass'});
  this.resource('fail', {path: '/fail'});
});

export default Router;

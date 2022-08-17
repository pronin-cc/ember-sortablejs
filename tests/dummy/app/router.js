import EmberRouter from '@ember/routing/router';
import config from 'dummy/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

<<<<<<< HEAD
Router.map(function() {
  this.route('simple');
  this.route('shared');
  this.route('clone');
  this.route('disable');
  this.route('handle');
  this.route('filter');
  this.route('thresholds');
  this.route('cancelable');
});
=======
Router.map(function () {});
>>>>>>> f8a0530 (v3.15.0...v4.6.0)

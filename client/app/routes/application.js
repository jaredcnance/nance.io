import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('actions', {
      stopScrolling: () => {
        controller.set('showMenu', true);
      }
    });
  }
});

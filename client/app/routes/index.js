import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(...arguments);

    controller.set('attrs', {
      showMenu: Ember.computed('application', () => {
        let applicationController = this.controllerFor('application');
        return applicationController.get('showMenu');
      }),
    });
  },
});

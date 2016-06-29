import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    this._super(...arguments);
    controller.set('showMenu', false);
    controller.set('actions', {
      stopScrolling: () => {
        controller.set('showMenu', true);
      }
    });
  },
  actions:{
    toggleMenu: function(direction) {
      $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('setting', 'direction', 'right')
      .sidebar('toggle');
    }
  }
});

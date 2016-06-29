import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['scroll-into-view'],
  persistVisibility: false,
  didInsertElement() {
    var _this = this;
    var _element = this.element;
    var _buffer = this.get('buffer');
    if (!this.get('visibilityOverride')) {
      $(window).scroll(function() {
        var bottom_of_object = $(_element).offset().top + $(_element).outerHeight() + _buffer;
        var bottom_of_window = $(window).scrollTop() + $(window).height() + $(".scroll").scrollTop();
        var offset = (bottom_of_object - bottom_of_window) / $(_element).outerHeight();
        var opacity = 1;
        var persistVisibility = _this.get('persistVisibility');

        if (!persistVisibility) {
          if (offset > 0 && offset < 1) {
            opacity = opacity - offset;
          } else {
            if (offset > 0) {
              opacity = 0;
            }
          }

          $(_element).css({
            'opacity': opacity,
            'transform': 'scale(' + opacity + ')'
          });
        }
        if (offset < 0) {
          _this.set('persistVisibility', true);
        }

      });
    } else {
      $(_element).css({
        opacity: 1
      });
    }
  }
});

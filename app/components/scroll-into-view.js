import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['scroll-into-view'],
  didInsertElement() {
    var _this = this.element;
    var _buffer = this.get('buffer');
    var bottom_of_object = $(_this).offset().top + $(_this).outerHeight() + _buffer;


    $(window).scroll(function() {
      var bottom_of_window = $(window).scrollTop() + $(window).height() + $(".scroll").scrollTop();
      var offset = (bottom_of_object - bottom_of_window) / $(_this).outerHeight();
      var opacity = 1;
      // if(_this.id === "ember468"){
      //   console.log('bottom_of_window',bottom_of_window);
      //   console.log('bottom_of_object',bottom_of_object);
      // }
      if(offset < 1)
      {
        if(offset > 0){
          opacity = opacity - offset;
        }
      }
      else{
        opacity = 0;
      }
      $(_this).css({
        'opacity': opacity,
        'transform': 'scale('+opacity+')'
      });
    });
  }
});

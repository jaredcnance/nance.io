import Ember from 'ember';

export default Ember.Component.extend({
  stickTop: false,
  didInsertElement() {
      var _component = this;
      var _this = this.element;
      $(window).scroll(function(e) {
        if ($(window).height() - $(window).scrollTop() > 50 && !_component.get('stickTop')) {
          $(_this).css({
            'overflow':'hidden'
          })
        }
        else{
          $(_this).css({
            'overflow-y':'scroll'
          });
          if($(window).scrollTop() > 0){
            $(".body").css({
              'top':'50px'
            })
            _component.set('stickTop', true);
          }
        }
      });
      $(_this).scroll(function(){
        $(window).scroll();
      })
    }
});

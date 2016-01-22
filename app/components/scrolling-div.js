import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
      var _component = this;
      var _this = this.element;
      $(window).scroll(function(e) {
        if ($(window).height() - $(window).scrollTop() > 100) {
          $(_this).css({
            'overflow':'hidden'
          })
        }
        else{
          $(_this).css({
            'overflow-y':'scroll'
          })
        }
      });
      $(_this).scroll(function(){
        $(window).scroll();
      })
    }
});

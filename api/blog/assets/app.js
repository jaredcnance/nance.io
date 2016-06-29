// disqus script
var disqus_developer = 1;
var disqus_config = function() {
  this.page.url = 'https://nance.io';
  this.page.identifier = location.pathname;
};
(function() { // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement('script');

  s.src = 'https://nanceio.disqus.com/embed.js';

  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})();

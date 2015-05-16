var tabs = document.querySelector('paper-tabs');
var pages = document.querySelector('core-animated-pages');
var list = document.querySelector('post-list');

tabs.addEventListener('core-select', function() {
  pages.selected = tabs.selected;
  list.show = tabs.selected;
});
'use strict';

angular.module('Paper')
.component('footer', {
  controller: function($scope) {

  },
  bindings: {
    footerTitle: '<'
  },
  template: `
<md-toolbar class="md-hue-2">
  <div class="md-toolbar-tools">
    <span class="md-body-1">&copy; 2016 Pixel Praise LLC.</span>
  </div>
</md-toolbar>
`
});

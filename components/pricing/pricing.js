'use strict';

angular.module('Paper')
.component('pricing', {
  controller: function($scope) {

  },
  bindings: {
    footerTitle: '<'
  },
  template: `
  <md-tabs class="md-accent" md-stretch-tabs="always" md-dynamic-height md-border-bottom>
    <md-tab>
      <md-tab-label>Monthly</md-tab-label>
      <md-tab-body>
        <md-content class="md-padding" layout="column" layout-align="center center">
          <div class="md-headline">$10/mo</div>
          <div class="md-subhead">Monthly Subscription</div>
          <p>Use, by you or one client, in a single end product which end users can be charged for. The total price includes the item price and a buyer fee.</p>
          <md-button class="md-primary md-raised">Buy Now</md-button>
        </md-content>
      </md-tab-body>
    </md-tab>
    <md-tab>
      <md-tab-label>Yearly <span class="md-caption">(Save $21)</span></md-tab-label>
      <md-tab-body>
        <md-content class="md-padding" layout="column" layout-align="center center">
          <div class="md-headline">$99/yr</div>
          <div class="md-subhead">Yearly Subscription</div>
          <p>Use, by you or one client, in a single end product which end users can be charged for. The total price includes the item price and a buyer fee.</p>
          <md-button class="md-primary md-raised">Buy Now</md-button>
        </md-content>
      </md-tab-body>
    </md-tab>
  </md-tabs>
`
});

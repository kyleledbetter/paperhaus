'use strict';

var app = angular.module('RadioActive', ['ngMaterial', 'ui.router']);

app.run(['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}]);

app.controller('AppCtrl', ['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog', '$mdMedia', '$location', '$anchorScroll', function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $mdMedia, $location, $anchorScroll) {

  $scope.query = {
    closeEl: '.close',
    overlay: {
      templateUrl: 'views/search/query.html'
    }
  };

  $scope.gotoAnchor = function(x) {
    var newHash = 'anchor-' + x;
    if ($location.hash() !== newHash) {
      // set the $location.hash to `newHash` and
      // $anchorScroll will automatically scroll to it
      $location.hash('anchor-' + x);
    } else {
      // call $anchorScroll() explicitly,
      // since $location.hash hasn't changed
      $anchorScroll();
    }
  };

  // Toolbar search toggle
  $scope.toggleSearch = function(element) {
    $scope.showSearch = !$scope.showSearch;
  };

  // Sidenav toggle
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  // Menu items
  $scope.menu = [
    {
      title: 'Home',
      state: 'dashboard',
      icon: 'action:ic_view_quilt_24px', // we have to use Google's naming convention for the IDs of the SVGs in the spritesheet
    },
    {
      title: 'Templates',
      state: 'templates',
      icon: 'editor:ic_insert_chart_24px',
    },
    {
      title: 'Membership',
      state: 'users',
      icon: 'editor:ic_insert_photo_24px',
    },
  ];


  // Mock Questions
  $scope.tiles = [
    {
      title: 'Forum App Template',
      desc: 'The idea is to create an app that the marketers can use by extending the customer influencer index model that calculates customers influence based on relations',
      rows: 2,
      columns: 2,
      background: 'bgc-purple-700',
      image: 'img/full/material-design-forum.png'
    },
    {
      title: 'Finance App Template',
      desc: 'The idea is to create an app that the marketers can use by extending the customer influencer',
      rows: 1,
      columns: 1,
      background: 'bgc-green-800',
      image: 'img/full/material-design-finance.png'
    },
    {
      title: 'Chat App Template',
      desc: 'The idea is to create an app that the marketers can use by extending the customer influencer index model that calculates customers influence based on relations',
      rows: 1,
      columns: 1,
      background: 'bgc-deep-purple-700',
      image: 'img/thumb/app-3.png'
    },
    {
      title: 'Events App Template',
      desc: 'The idea is to create an app that the marketers can use by extending the customer influencer index model that calculates customers influence based on relations',
      rows: 2,
      columns: 2,
      background: 'bgc-teal-A700',
      image: 'img/full/material-design-events.png'
    },
    {
      title: 'Stock Market App Template',
      desc: 'The idea is to create an app that the marketers can use by extending the customer influencer index model that calculates customers influence based on relations',
      rows: 1,
      columns: 1,
      background: 'bgc-blue-grey-700',
      image: 'img/thumb/app-5.png'
    },
    {
      title: 'Contact Directory App Template',
      desc: 'The idea is to create an app that the marketers can use by extending the customer influencer index model that calculates customers influence based on relations',
      rows: 1,
      columns: 1,
      background: 'bgc-deep-orange-A200',
      image: 'img/full/material-design-contacts.png'
    },
  ];

  // Dialogs
  $scope.showDetail = function($event, tile) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/dashboard/dialogs/dialog.tmpl.html',
      targetEvent: $event,
      clickOutsideToClose:true,
      fullscreen: 1,
      locals:{dataToPass: tile},
    });

  };

  // Dialog controller
  function DialogController($scope, $mdDialog, dataToPass) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.tile = dataToPass;
  }

  // Bottomsheet & Modal Dialogs
  $scope.alert = '';
  $scope.showListBottomSheet = function($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"><md-list><md-list-item class="md-2-line" ng-repeat="item in items" role="link" md-ink-ripple><md-icon md-svg-icon="{{item.icon}}" aria-label="{{item.name}}"></md-icon><div class="md-list-item-text"><h3>{{item.name}}</h3></div></md-list-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
      targetEvent: $event,
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };

  // Bottomsheet for replies
  $scope.reply = '';
  $scope.showReply = function($event) {
    $scope.reply = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header pad-lg"><md-input-container flex><md-list-item class="md-2-line"><md-icon hide-sm md-svg-icon="avatars:svg-5" class="md-avatar"></md-icon><div class="md-list-item-text"><h3>Oliver Ratzesberger</h3></div></md-list-item><md-tabs class="md-hue-1" md-selected="data.selectedIndex"> <md-tab id="tab1"> <md-tab-label>Write</md-tab-label> <md-tab-body> <md-input-container><label>Reply</label><textarea ng-model="user.reply" columns="5" md-maxlength="1000"></textarea></md-input-container> </md-tab-body> </md-tab> <md-tab id="tab2"> <md-tab-label>Preview</md-tab-label> <md-tab-body><p>Check the Listener streaming source named Website orders.</p><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></md-tab-body> </md-tab> </md-tabs><div class="md-actions" layout="row" layout-align="end center"><md-button class="">Cancel</md-button><md-button class="md-primary">Submit</md-button></div></md-bottom-sheet>',
      targetEvent: $event,
    }).then(function(clickedItem) {
      $scope.reply = clickedItem.name + ' clicked!';
    });
  };

  $scope.showAdd = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      template: '<md-dialog aria-label="Form"> <md-content class="md-padding"> <form name="userForm"> <div layout layout-sm="column"> <md-input-container flex> <label>First Name</label> <input ng-model="user.firstName"> </md-input-container> <md-input-container flex> <label>Last Name</label> <input ng-model="user.lastName"> </md-input-container> </div> <md-input-container flex> <label>Message</label> <textarea ng-model="user.biography" columns="1" md-maxlength="150"></textarea> </md-input-container> </form> </md-content> <div class="md-actions" layout="row"> <span flex></span> <md-button ng-click="answer(\'not useful\')"> Cancel </md-button> <md-button ng-click="answer(\'useful\')" class="md-primary"> Save </md-button> </div></md-dialog>',
      targetEvent: ev,
    })
    .then(function(answer) {
      $scope.alert = 'You said the information was';
    }, function() {

      $scope.alert = 'You cancelled the dialog.';
    });
  };
}]);

app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
  $scope.items = [
    { name: 'Share', icon: 'social:ic_share_24px' },
    { name: 'Upload', icon: 'file:ic_cloud_upload_24px' },
    { name: 'Copy', icon: 'content:ic_content_copy_24px' },
    { name: 'Print this page', icon: 'action:ic_print_24px' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $mdBottomSheet.hide(clickedItem);
  };
});

app.config(function($mdThemingProvider) {
  $mdThemingProvider.definePalette('customPrimary', {
    '50': 'FFF9C4',
    '100': 'FFF8E1',
    '200': 'ef9a9a',
    '300': 'e57373',
    '400': 'ef5350',
    '500': 'f44336',
    '600': 'e53935',
    '700': 'd32f2f',
    '800': 'c62828',
    '900': 'b71c1c',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

  $mdThemingProvider.theme('default')
    .primaryPalette('grey', {
      'default': '200',
      'hue-1': '50',
      'hue-2': '100'
    })
    .accentPalette('pink', {
      'default': 'A400',
      'hue-1': '50',
    })
    .backgroundPalette('blue-grey', {
      'default': '50'
    });
  $mdThemingProvider.theme('dialog')
    .primaryPalette('blue')
    .backgroundPalette('grey', {
      'default': '200'
    });
  $mdThemingProvider.theme('dark')
    .primaryPalette('deep-purple', {
      'hue-2': '900'
    });
});

app.config(function($mdIconProvider) {
  $mdIconProvider

      // linking to https://github.com/google/material-design-icons/tree/master/sprites/svg-sprite
      //
      .iconSet('action', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24)
      .iconSet('alert', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-alert.svg', 24)
      .iconSet('av', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-av.svg', 24)
      .iconSet('communication', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-communication.svg', 24)
      .iconSet('content', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-content.svg', 24)
      .iconSet('device', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-device.svg', 24)
      .iconSet('editor', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-editor.svg', 24)
      .iconSet('file', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-file.svg', 24)
      .iconSet('hardware', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-hardware.svg', 24)
      .iconSet('image', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-image.svg', 24)
      .iconSet('maps', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-maps.svg', 24)
      .iconSet('navigation', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-navigation.svg', 24)
      .iconSet('notification', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-notification.svg', 24)
      .iconSet('social', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .iconSet('toggle', 'https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-toggle.svg', 24)

      // Illustrated user icons used in the docs https://material.angularjs.org/latest/#/demo/material.components.gridList
      .iconSet('avatars', 'https://raw.githubusercontent.com/angular/material/master/docs/app/icons/avatar-icons.svg', 24)
      .defaultIconSet('https://raw.githubusercontent.com/google/material-design-icons/master/sprites/svg-sprite/svg-sprite-action.svg', 24);
});

app.directive('backButton', function($window) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      elem.bind('click', function() {
        $window.history.back();
      });
    },
  };
});

// UI Router
app.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      templateUrl: 'views/dashboard/dashboard.html',
      url: '/',
      title: 'PAPER.HAUS'
    })
    .state('templates', {
      templateUrl: 'views/templates/templates.html',
      url: '/templates',
      title: 'Material Design App Templates'
    })
    .state('template', {
      templateUrl: 'views/templates/template.html',
      url: '/template',
      title: 'Material Design App Template'
    })
    .state('users', {
      templateUrl: 'views/users/users.html',
      url: '/users',
      title: 'Users'
    })
    .state('user', {
      templateUrl: 'views/user/user.html',
      url: '/user',
      title: 'User'
    })
    .state('user-create', {
      templateUrl: 'views/user/form.html',
      url: '/user/create',
      title: 'Create User'
    })
    .state('settings', {
      templateUrl: 'views/settings/settings.html',
      url: '/settings',
      title: 'Settings'
    });
});

// Gridlist
app.controller('gridList', function($scope, $mdDialog, $mdMedia) {
    this.tiles = buildGridModel({
            icon : "avatars:svg-",
            title: "App UI ",
            background: ""
          });
    function buildGridModel(tileTmpl){
      var it, results = [ ];
      for (var j=0; j<11; j++) {
        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        it.title = it.title + (j+1);
        it.span  = { row : 1, col : 1 };
        switch(j+1) {
          case 1:
            it.background = "red";
            it.span.row = it.span.col = 2;
            break;
          case 2: it.background = "green";         break;
          case 3: it.background = "darkBlue";      break;
          case 4:
            it.background = "blue";
            it.span.col = 2;
            break;
          case 5:
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;
          case 6: it.background = "pink";          break;
          case 7: it.background = "darkBlue";      break;
          case 8: it.background = "purple";        break;
          case 9: it.background = "deepBlue";      break;
          case 10: it.background = "lightPurple";  break;
          case 11: it.background = "yellow";       break;
        }
        results.push(it);
      }
      return results;
    }
  });

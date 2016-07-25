import angular from 'angular';
import angularAnimation from 'angular-animate';
import angularAria from 'angular-aria';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngMdIcons from 'angular-material-icons';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

angular.module('app', [
    uiRouter,
    ngMaterial,
    ngMdIcons,
    Common.name,
    Components.name
  ])
  .config(($locationProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');

    // Angular material theming
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
      'contrastDefaultColor': 'light',
      'contrastDarkColors': ['50'],
      '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
      .primaryPalette('customBlue', {
        'default': '500',
        'hue-1': '50'
      })
      .accentPalette('pink')
      .dark();
    $mdThemingProvider.theme('input', 'default')
      .primaryPalette('grey');

    // $mdThemingProvider.theme('default')
    // .dark();
})

.component('app', AppComponent);

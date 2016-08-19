import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Info from './about/info/info';

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Info.name
]);

export default componentModule;

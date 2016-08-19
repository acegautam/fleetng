import template from './info.html';
import controller from './info.controller';

let infoComponent = {
  restrict: 'E',
  bindings: {
    message: '=',
    features: '=',
    selectedfeature: '=',
    showmsg: '&'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default infoComponent;

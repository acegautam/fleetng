class HeaderController {
  /* @ngInject */

  constructor(HeaderService) {
    this.name = 'Header Controller';
    this.headerService = HeaderService;
    // this.init();
  }

  init(){
    this.headerService.getInfo()
      .then((response) => {
        this.info = response.data;
      });
  }
}

export default HeaderController;

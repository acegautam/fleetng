class HomeController {
  /* @ngInject */

  constructor(HomeService) {
    this.name = 'Home Screen';
    this.homeService = HomeService;
    // this.init();
  }

  init(){
    this.homeService.getInfo()
      .then((response) => {
        this.info = response.data;
      });
  }
}

export default HomeController;

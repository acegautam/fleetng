class HomeController {
  /* @ngInject */

  constructor(HomeService) {
    this.name = 'Home Screen';
    this.homeService = HomeService;
    // this.init();
  }

  init() {
    // Initialization tasks
  }

  getInfo() {
    this.homeService.getInfo()
      .then((response) => {
        this.info = response.data;
        console.log(this.info);
      });
  }
}

export default HomeController;

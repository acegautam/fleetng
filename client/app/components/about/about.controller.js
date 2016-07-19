class AboutController {
  /* @ngInject */

  constructor(AboutService) {
    this.name = 'About Me';
    this.aboutService = AboutService;
    // this.init();
  }

  init(){
    this.aboutService.getInfo()
      .then((response) => {
        this.info = response.data;
      });
  }
}

export default AboutController;

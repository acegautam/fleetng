class NavbarController {
  constructor($mdSidenav, $location) {
    this.name = 'navbar';
    this.$location = $location;
    this.$mdSidenav = $mdSidenav;
  }

  setState(state, e){
    // e.preventDefault();
    // this.toggleSidenav('left');
  }

  isTabActive(state){
    console.log(this.$location.path());
    return (state === this.$location.path());
  }
  toggleSidenav(menuId) {
    this.$mdSidenav(menuId).toggle();
  }
}

export default NavbarController;

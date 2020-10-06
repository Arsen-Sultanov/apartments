import { observable } from 'mobx';

export default observable({
  isSignIn: false,
  isSideBarOpen: false,
  setIsSignIn(sign) {
    this.isSignIn = sign;
  },
  setIsSideBarOpen() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
});

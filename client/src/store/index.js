import { observable } from 'mobx';

export default observable({
  isSignIn: false,
  setIsSignIn: function(sign) {
    this.isSignIn = sign;
  }
});

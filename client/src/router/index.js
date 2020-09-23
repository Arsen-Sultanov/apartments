import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Pages from '../pages';

const requireLogin = (to, from, next) => {
  console.log(to, 'metaaaa');
  if (to.meta.auth) {
    next.redirect('/sign-in');
  } else {
    next();
  }
};
const test = { t: true };
export default () => {
  return (
    <Router>
      <GuardProvider guards={[requireLogin]}>
        <Header/>
        <Switch>
          <GuardedRoute exact path="/apartments" component={Pages.Apartments} meta={test}/>
          <GuardedRoute exact path="/sign-up" component={Pages.SignUp}/>
          <GuardedRoute exact path="/sign-in" component={Pages.SignIn}/>
          <GuardedRoute exact path="/about" component={Pages.About}/>
          <GuardedRoute exact path="/" component={Pages.Home}/>
        </Switch>
        <Footer/>
      </GuardProvider>
    </Router>
  );
};

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import About from '../pages/About';

export default () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Switch>
      <Footer/>
    </Router>
  );
};

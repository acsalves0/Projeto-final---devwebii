import React from "react";
import Signin from './components/Signin';
import Register from './components/Register';
import Checkout from './components/Checkout';
import Dashboard from './components/Dashboard'
import CheckoutUnidade from './components/CheckoutUnidade'
import PageNotFound from './components/PageNotFound';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={Checkout} />
        <Route path='/registrarunidade' component={CheckoutUnidade} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
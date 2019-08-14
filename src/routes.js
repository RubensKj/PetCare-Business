import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreateService from './Pages/CreateService';
import EditPage from './Pages/EditPage';

import ListProducts from './Pages/ListProducts';
import ListRequests from './Pages/ListRequests';

import Request from './Pages/Request';

import Preview from './Pages/Preview';

import SignUp from './Pages/SignUp';
import SignUpCompany from './Pages/SignUpCompany';
import SignUpOwner from './Pages/SignUpOwner';
import LogIn from './Pages/LogIn';

const Routes = () => (
  <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Preview} />
          <Route path='/cadastrar' component={SignUp} />
          <Route path='/create-petshop' component={SignUpCompany} />
          <Route path='/finalizar' component={SignUpOwner} />
          <Route path='/entrar' component={LogIn} />
          <Route path='/cadastrar-servico' component={CreateService} />
          <Route exact path='/produtos' component={ListProducts} />
          <Route exact path='/pedidos' component={ListRequests} />
          <Route path='/pedidos/id' component={Request} />
          <Route path='/produtos/id/editar' component={EditPage} />
      </Switch>
  </BrowserRouter>
);

export default Routes;
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Login from './pages/login/Login';
import Home from './pages/home/home';
import NotFound from './pages/404/404';
import Criarcartao from './pages/novo-cartão/cadastrarcartao'
import Criarconta from './pages/criarconta/Criarconta'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/cadastrarcartao" component={Criarcartao}></Route>
        <Route path="/criarconta" component={Criarconta}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



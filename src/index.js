import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import UserDatabase from './components/UserDatabase';
import Dashboard from './components/Dashboard'
import NotFoundPage from './components/NotFoundPage';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
const routes = (
     <BrowserRouter>
          <Switch>
               <Route path="/" component={Dashboard} exact={true} />
               <Route path="/userdatabase" component={UserDatabase} />
               <Route component={NotFoundPage} />
          </Switch>
     </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));

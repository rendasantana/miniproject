import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
//! Sign Page
import HomeSign from '../view/HomeSign';
import SignIn from '../pages/login/SignIn';
import SignUp from '../pages/registrasi/SignUp';

// import TaskManager from '../pages/private/home/task/TaskManager';

import ForgotPassword from '../pages/lupaPassword/ForgotPassword';
import IndexPrivate from '../pages/private/IndexPrivate';
import NotFound from '../pages/404/NotFound';
import PrivateRoutes from './privateRoutes/PrivateRoutes';
import TaskList from '../pages/private/home/task/TaskList';


const Routers = () => {
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/homesign" exact component={HomeSign}/>
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/signup"  exact component={SignUp}/>
          <Route path="/forgotpassword" component={ForgotPassword}/>
          <Route path="/taskmanager" exact component={TaskList}/>
          {/* Private Router */}
          <PrivateRoutes path="/pengaturan" component={IndexPrivate}/>
          <PrivateRoutes path="/product" component={IndexPrivate}/>
          <PrivateRoutes path="/transaksi" component={IndexPrivate}/>
          <PrivateRoutes path="/home" component={IndexPrivate}/>
          <Route component={NotFound}/>
        </Switch>        
      </BrowserRouter>
      
    )
}

export default Routers;

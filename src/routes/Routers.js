import React, {Fragment} from 'react';
import HomePage from '../view/HomePage';
import SignIn from '../component/SignIn';
import SignUp from '../component/SignUp';
import TaskManager from '../component/TaskManager';
import { BrowserRouter, Route} from "react-router-dom";

const Routers = () => {
    return(
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={HomePage}/>
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/signup" exact component={SignUp}/>
          <Route path="/taskmanager" exact component={TaskManager}/>
        </Fragment>
      </BrowserRouter>
      
    )
}

export default Routers;

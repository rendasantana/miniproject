import React, { Fragment } from 'react';
import './App.css';
import Routers from './routes/Routers';
// import SignIn from './component/SignIn';
// import SignUp from './component/SignUp';
// import TaskManager from './component/TaskManager';

function App() {
  return (
    <Fragment>
      <div>
        <Routers/>
      </div>
    </Fragment>
  );
}

export default App;

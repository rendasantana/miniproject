import React, { Fragment } from 'react';
import '../../../../asset/style/SignIn.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

function TaskManager() {
  return(
    <Fragment>
      <AddTask/>
      <TaskList/>
    </Fragment>
  )
};

export default TaskManager;

import React, { Fragment } from 'react';
import './style/TaskManager.css';
import TaskList from './TaskList';
// import AddTask from './AddTask';

function TaskManager() {
  return(
    <Fragment>
      {/* <AddTask/> */}
      <TaskList/>
    </Fragment>
  )
};

export default TaskManager;

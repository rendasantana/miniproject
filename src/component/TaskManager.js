import React, { Fragment, useState } from 'react';
import '../asset/style/TaskManager.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

function TaskManager() {
  return(
    <Fragment>
      <AddTask/>
    </Fragment>
  )
};

export default TaskManager;

import React, { Fragment, useState } from 'react';
import '../../../../asset/style/SignIn.css';
import TaskList from './TaskList';

const AddTask = ({ saveTodo }) => {
  const [title, setTitle] = useState('');

  const handleChange = event => {
    setTitle({
      [event.target.name]: event.target.value
    });
  }

    return(
    <Fragment>
      <div className="task-container">
        <div className="container-page">
          <div className="task-header">
            <p>Todos</p>
            <p>Sign Out</p>
          </div>               
          <div className="task-main">
            <div className="main-left">
              <p>Nama Anda</p>
              <p>May Day</p>
              <p>Important</p>
              <p>Completed</p>
            </div>
            <div className="main-right">

              <form 
                onSubmit={(event) => {
                  event.preventDefault();
                  saveTodo(title);
              }}
              >
                <input className="addtask" placeholder="Basic usage" 
                  value={title}
                  onChange={handleChange}
                />

                <button
                
                >
                  Tambah</button>
              </form>


              <div className="card-task">
                {title}
                <TaskList title="Hello"/>
              </div>



            </div>
          </div>
        </div>
      </div>

      
    </Fragment>
  )
}


export default AddTask;

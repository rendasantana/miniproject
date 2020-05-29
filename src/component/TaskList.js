import React from 'react'
import TaskManager from './TaskManager'

function TaskList({title}) {
    return (
        <div>
            <div className="card-list">
                  <div className="card-title">
                  <p>
                    {title}
                  </p>
                  </div>                  
                  <div className="card-delete">
                    <button>Del</button>
                  </div>
                </div>
        </div>
    )
}

export default TaskList

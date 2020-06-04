import React, { Fragment } from "react";
import axios from "axios";
import AddTask from './AddTask';
import { Table} from 'reactstrap';

const baseUrl = "https://mini-project1.herokuapp.com/api/v1"
let token;

class TaskList extends React.Component{
  state = {
    tasks: [],
    showModal: false
  }

//   logout = e => {
//     localStorage.removeItem("token");
//     this.props.history.push("/signin")
//   }
  
  getAllTask = async() => {
    token = localStorage.getItem("token")
    try {
      const res = await axios.get(`${baseUrl}/tasks?page=1&limit=100`,{
        headers: {
            authorization: token
        }
      })
      this.setState({ tasks: res.data.data.filter(item => item.author.id === 73) })
    //   res.data.data.filter(item => item.author.id === idnya brp)
    }catch(err) {
      console.log(err)
    }
  } 

  deleteItem = async(id) => {
    token = localStorage.getItem("token")
    try {
      const res = await axios.delete(`${baseUrl}/tasks/${id}`,{
        headers: {
            Authorization : token
        }
      })
      this.setState({tasks: this.state.tasks.filter(item => item.id !== id)})
    }catch(err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getAllTask()
  }

  render() {
    return(
      <Fragment>
          <AddTask getAll={this.getAllTask}/>
            <ul className="task-list">
            {this.state.tasks.map(item => 
                <Table dark key={item.id}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td><button onClick={() => this.deleteItem(item.id)}>delete</button></td>
                        </tr>
                    </tbody>
                </Table>
            )}
            </ul>
            
      </Fragment>
    )
  }
}
  

export default TaskList;

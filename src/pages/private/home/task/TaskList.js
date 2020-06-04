import React, { Fragment } from "react";
import axios from "axios";
import AddTask from './AddTask';
import { Table} from 'reactstrap';
import './style/TaskManager.css';

const baseUrl = "https://mini-project1.herokuapp.com/api/v1"
let token;

class TaskList extends React.Component{
  state = {
    tasks: [],
    profileId: null,
    profileName: 123,
    profileImg: null,
    showModal: false
  }

  logout = () => {
    localStorage.removeItem("token");
    this.props.history.push("/signin")
  }
  
  getAllTask = async() => {
    token = localStorage.getItem("token")
    try {
      const res = await axios.get(`${baseUrl}/tasks?page=1&limit=100`,{
        headers: {
            authorization: token
        }
      })
      this.setState({ tasks: res.data.data.filter(item => item.author.id === 73)})
      console.log("Test Task", this.tasks)
    //   res.data.data.filter(item => item.author.id === idnya brp)
    }catch(err) {
      console.log(err)
    }
  } 

  getUser = async () => {
    token = localStorage.getItem("token")
    try {
        const res = await axios.get(`${baseUrl}/user/profile`, {
            headers: {
                authorization: token
            }
        })
        if(res.data.status === "Success"){
            this.setState({ profileId: res.data.data.id, 
              profileName: res.data.data.owner.name, 
              profileImg: res.data.data.owner.image})
        }
        console.log("Test Task", this.profileId)
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
    this.getUser()
  }

  render() {
      console.log("test profile name", this.tasks)
    return(
      <Fragment>
          <AddTask logout={this.logout} getAll={this.getAllTask}/>
            <ul className="task-list">
            {this.state.tasks.map(item => 
                <Table dark key={item.id} className="table-list">
                    <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Description</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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

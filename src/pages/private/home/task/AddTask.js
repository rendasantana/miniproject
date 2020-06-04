import React, { Fragment} from 'react';
import { Form, Input, FormGroup, Col, Table } from 'reactstrap';
import './style/TaskManager.css';
// import TaskList from './TaskList';
import axios from 'axios';

const baseUrl = "https://mini-project1.herokuapp.com/api/v1"

class AddTask extends React.Component {
  state={
    name: "",
    description: "",
    isLoading: false
  }

  change = e => {
    this.setState({
      [e.target.name] : e.target.value
    })
  } 

  logout = e => {
    localStorage.removeItem("token");
    this.props.history.push("/signin")
  }

  submit = async(e) => {
    this.setState({ isLoading: true })
    let token = localStorage.getItem("token")
    e.preventDefault()
    // create data 
    const newTodo = {
      name: this.state.name,
      description: this.state.description
    }

    try {
      const res = await axios.post(`${baseUrl}/tasks`, newTodo, {
        headers: {
          authorization: token
        }
      })
      this.props.getAll()
      this.setState({ name: "", description: "", isLoading: false })
    }catch(err){
      console.log(err)
    }
  }

  render(){
    return(
    <Fragment>
      <div className="task-container">
        <div className="container-page">
          <div className="task-header">
            <p>Todos</p>
            <button onClick={this.logout}>sign out</button>
          </div>               
          <div className="task-main">
            <div className="main-left">
              <p>Nama Anda</p>
              <p>May Day</p>
              <p>Important</p>
              <p>Completed</p>
            </div>
            
            <div className="main-right">
            <h2>Create New task</h2>
              <Form onSubmit={this.submit} className="form-input">
                <FormGroup row>
                  <Col sm={30}>
                  <Input type="text" name="name" value={this.state.name} placeholder="name"  onChange={this.change}/>
                  <Input type="text" name="description" value={this.state.description} placeholder="description" onChange={this.change}/>
                  </Col>
                  <button>{this.state.isLoading ? "loading..." : "Tambah"}</button>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>

      
    </Fragment>
  )
 }
}


export default AddTask;

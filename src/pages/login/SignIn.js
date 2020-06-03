import React, { Fragment } from 'react';
import '../../asset/style/Sign.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from  'react-router-dom';
import axios from "axios";
const baseUrl = "https://mini-project1.herokuapp.com/api/v1"


class SignIn extends React.Component {
    state = {
        email: "",
        password: "",
        isLoading: false,
        error: false

    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submit = async(e) => {
        this.setState({ isLoading: true })
        e.preventDefault()

        const loginUser = {
          email: this.state.email,
          password: this.state.password
        }

        try {
          const res = await axios.post(`${baseUrl}/user/login`, loginUser)
          if(res.data.status === "success") {
            localStorage.setItem("token", res.data.data.token)
            this.setState({ isLoading: false, email: "", password: "" })
            this.props.history.push("/dashboard")
          }
        }catch(error){
          console.log(error)
          this.setState({ isLoading: false, email: "", password: "" })
        }
      }
    

    render(){
    return(
        <Fragment>
            <div className="sign-container">
                <div className="container">
                    <div className="sign-left">
                    <h3 style={{margin:'30px', fontSize:'20px', color:'white'}}>TODOS</h3>
                        <div className="left-main" >
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal detail and start your journey with us</p>
                            <form>
                                <Link to="/signup">
                                    <Button color="secondary">Sign Up</Button>{' '}
                                </Link>
                                
                            </form>                             
        
                        </div>
                    </div>
                    <div className="sign-right">
                        <h1>Sign in to Task Manager</h1>
                        <div className="sosmed">
                            <img className="img-fb"     src={require('../../asset/img/fb.svg')} alt="facebook"/>
                            <img className="img-gmail"  src={require('../../asset/img/gmail.svg')} alt="gmail"/>
                            <img className="img-in"     src={require('../../asset/img/linkedin.svg')} alt="linkedin"/>
                        </div>
                        <div className="sign-form">
                        <Form className="form-page" onSubmit={this.submit} >
                            <p>or use your email account</p>
                            <FormGroup className="form-group">
                                <Label for="exampleEmail">Email</Label>
                                <Input 
                                type="email" 
                                name="email" 
                                id="exampleEmail" 
                                onChange={this.handleOnChange}
                                placeholder="Insert Email" />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label for="examplePassword" >Password</Label>
                                <Input 
                                type="password" 
                                name="password" 
                                id="examplePassword"
                                onChange={this.handleOnChange}
                                placeholder="insert Password" />
                            </FormGroup>
                            <Button outline color="primary">{this.state.isLoading ? "loading..." : "signup"}</Button>{' '}
                        </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
        
    }
}

export default SignIn;

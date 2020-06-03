import React, { Fragment } from 'react';
import '../../asset/style/Sign.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from  'react-router-dom';

class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.id]: e.target.value
        })
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
                        <Form className="form-page">
                            <p>or use your email account</p>
                            <FormGroup className="form-group">
                                <Label for="exampleEmail">Email</Label>
                                <Input 
                                type="email" 
                                name="email" 
                                id="exampleEmail" 
                                handleOnChange={this.handleOnChange}
                                placeholder="Insert Email" />
                            </FormGroup>
                            <FormGroup className="form-group">
                                <Label for="examplePassword" >Password</Label>
                                <Input 
                                type="password" 
                                name="password" 
                                id="examplePassword"
                                handleOnChange={this.handleOnChange}
                                placeholder="insert Password" />
                            </FormGroup>
                            <Button outline color="primary">Sign In</Button>{' '}
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
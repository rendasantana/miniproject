import React, { Fragment } from 'react';
import '../asset/style/SignIn.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 24 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  
  const SignIn = () => {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return(
        <Fragment>
            <div className="signIn-container" >
                <div className="container">
                    <div className="pageLeft">
                        <h3 style={{margin:'30px', fontSize:'20px', color:'white'}}>TODOS</h3>
                        <div className="left-sign" >
                            <h2>Hello, Friend!</h2>
                            <p>Enter your personal detail and start your journey with us</p>
                            <Form>
                                <Form.Item {...tailLayout}>
                                    <Link to="/signup">
                                        <Button className="btn-signup" 
                                        type="none" 
                                        htmlType="submit"
                                        shape="round"
                                        size="large"
                                        >
                                        SIGN UP
                                        </Button>
                                    </Link>
                                    {/* <Route exact path="/signup">
                                      <SignUp />
                                    </Route> */}
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <hr/>
                    <div className="pageRight">
                        <h1>Sign in to Task Manager</h1>
                        <div className="right-sosmed">
                            <img className="img-fb" src={require('../asset/img/fb.svg')} alt="facebook"/>
                            <img className="img-gmail" src={require('../asset/img/gmail.svg')} alt="gmail"/>
                            <img className="img-in" src={require('../asset/img/linkedin.svg')} alt="linkedin"/>
                        </div>
                        
                        <div className="right-form">
                            <p>or use your email account</p>
                            <Form className="form-part"
                                {...layout}
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                
                                <Form.Item 
                                    name='email'
                                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email"/>
                                </Form.Item>
                        
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password" />
                                </Form.Item>
                        
                                {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item> */}
                        
                                <Form.Item {...tailLayout}>
                                    <Link>
                                        <Button className="btn-signup" 
                                        type="primary" 
                                        htmlType="submit"
                                        shape="round"
                                        size="large"
                                        >
                                            SIGN IN
                                        </Button>
                                    </Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default SignIn;

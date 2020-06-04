import React, { Fragment } from 'react';
import '../../asset/style/SignIn.css';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 24 },
  };
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  };
  
  const SignUp = () => {
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
                            <h2>Welcome Back!</h2>
                            <p>To keep connected with us please login with your personal info</p>
                            <Form>
                                <Form.Item {...tailLayout}>
                                    <Link to="/signin">
                                        <button>
                                            SIGN IN
                                        </button>
                                        

                                    </Link>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <hr/>
                    <div className="pageRight">
                        <h1>Create Account</h1>
                        <div className="right-sosmed">
                            <img className="img-fb"     src={require('../../asset/img/fb.svg')} alt="facebook"/>
                            <img className="img-gmail"  src={require('../../asset/img/gmail.svg')} alt="gmail"/>
                            <img className="img-in"     src={require('../../asset/img/linkedin.svg')} alt="linkedin"/>
                        </div>
{/* ------------------------------------------------------------------------------------------------------- */}                        
                        <div className="right-form">
                            <p>or use your email for registration</p>
                            <Form className="form-part"
                                {...layout}
                                    name="basic"
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                >
                                <Form.Item className="form-name"
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your name!' }]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name"/>
                                </Form.Item>
{/* ------------------------------------------------------------------------------------------------------- */}
                                <Form.Item 
                                    name='email'
                                    rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
                                >
                                    <Input prefix={<MailOutlined  className="site-form-item-icon" />} 
                                    placeholder="Email"/>
                                </Form.Item>
{/* ------------------------------------------------------------------------------------------------------- */}                        
                                <Form.Item
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password" />
                                </Form.Item>                        
{/* ------------------------------------------------------------------------------------------------------- */}
                                <Form.Item {...tailLayout}>
                                    <Button className="btn-signup" 
                                    type="primary" 
                                    htmlType="submit"
                                    shape="round"
                                    size="large"
                                    >
                                        SIGN UP
                                    </Button>
{/* ------------------------------------------------------------------------------------------------------- */}                                    
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default SignUp;
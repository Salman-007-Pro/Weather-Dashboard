//main
import React from "react";
import { Link, Redirect } from "react-router-dom";

//antd components
import { Form, Input, Button } from "antd";

//components
import Alert from "Components/Shared/Alert/Alert";

//antd icon
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  GithubOutlined,
  FacebookFilled,
} from "@ant-design/icons";

//scss
import "./Login.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  //   const { loginButtonUiState, error } = this.props.login;
  //   if (loginButtonUiState === SUCCESS) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <div className="login">
      <div className="login-body">
        <div className="login-title">
          <h1>Log in to you account</h1>
        </div>
        <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item name="email" rules={[{ required: true, message: "Please input your Email!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}>
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <div className="remember-me-box">
              <Link to="/auth/signup">Sign up Page</Link>
            </div>
          </Form.Item>
          <Form.Item>
            <div className="login-social">
              <GoogleOutlined className="social-icon" />
              <FacebookFilled className="social-icon" />
              <GithubOutlined className="social-icon" />
            </div>
          </Form.Item>
          <div className="submit-button">
            <Button
              //   loading={loginButtonUiState === IN_PROGRESS ? true : false}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
          </div>
        </Form>
      </div>
      {/* {loginButtonUiState === FAILED && <Alert message={error} type="error" showIcon />} */}
    </div>
  );
};

export default Login;

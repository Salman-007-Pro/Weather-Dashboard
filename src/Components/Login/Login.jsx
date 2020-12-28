//main
import React from "react";
import { useSelector, useDispatch } from "react-redux";
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

//actions
import Actions from "redux/actions";

//constant
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

//scss
import "./Login.scss";

const {
  //login
  loginInProgress,

  //facebook login
  facebookLoginInProgress,

  //google login
  googleLoginInProgress,

  //github login
  githubLoginInProgress,
} = Actions;

const Login = () => {
  const dispatch = useDispatch();
  const { uiStatelogin, error, uiStateSocialLogin } = useSelector((state) => state.Auth);
  const onFinish = ({ email, password }) => {
    dispatch(loginInProgress(email, password));
  };

  const googleLoginHandler = () => {
    dispatch(googleLoginInProgress());
  };

  const githubLoginHandler = () => {
    dispatch(githubLoginInProgress());
  };

  const facebookLoginHandler = () => {
    dispatch(facebookLoginInProgress());
  };
  if (uiStatelogin === SUCCESS || uiStateSocialLogin === SUCCESS) {
    return <Redirect to="/" />;
  }

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
            <Input.Password prefix={<LockOutlined />} type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <div className="remember-me-box">
              <Link to="/auth/signup">Sign up Page</Link>
            </div>
          </Form.Item>
          <Form.Item>
            <div className="login-social">
              <GoogleOutlined className="social-icon" onClick={googleLoginHandler} />
              <FacebookFilled className="social-icon" onClick={facebookLoginHandler} />
              <GithubOutlined className="social-icon" onClick={githubLoginHandler} />
            </div>
          </Form.Item>
          <div className="submit-button">
            <Button
              loading={uiStatelogin === IN_PROGRESS}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Log in
            </Button>
          </div>
        </Form>
      </div>
      {uiStatelogin === FAILED && <Alert message={error.message} type="error" showIcon />}
      {uiStateSocialLogin === FAILED && <Alert message={error.message} type="error" showIcon />}
    </div>
  );
};

export default Login;

//main
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from "react-router-dom";

//antd components
import { Form, Input, Button } from "antd";

//components
import Alert from "Components/Shared/Alert/Alert";

//antd icon
import { UserOutlined, LockOutlined } from "@ant-design/icons";

//actions
import Actions from "redux/actions";

//constant
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";

//scss
import "./Signup.scss";

const {
  //sign up
  signupInProgress,
} = Actions;

const Signup = () => {
  const dispatch = useDispatch();
  const { uiStateSignup, error } = useSelector((state) => state.Auth);

  const onFinish = ({ email, password, name }) => {
    dispatch(signupInProgress(email, password, name));
  };
  if (uiStateSignup === SUCCESS) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signup">
      <div className="signup-body">
        <div className="signup-title">
          <h1>Sign up for Check Weather</h1>
        </div>
        <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="name"
            hasFeedback
            rules={[{ required: true, message: "Please input your Name" }]}>
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="email"
            hasFeedback
            rules={[{ required: true, message: "Please input your Email!" }]}>
            <Input prefix={<UserOutlined />} type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            rules={[
              { required: true, message: "Please input your Password!" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (value?.length >= 6) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "plz enter the long password greater or equal then 6 character"
                  );
                },
              }),
            ]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true, message: "Please input your Password!" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("The two passwords that you entered do not match!");
                },
              }),
            ]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <div className="remember-me-box">
              <Link className="login-form-forgot" to="/auth/login">
                login page
              </Link>
            </div>
          </Form.Item>

          <div className="submit-button-signup">
            <Button
              loading={uiStateSignup === IN_PROGRESS}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      {uiStateSignup === FAILED && <Alert message={error.message} type="error" showIcon />}
    </div>
  );
};

export default Signup;

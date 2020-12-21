//main
import React from "react";
import { Link, Redirect } from "react-router-dom";

//antd components
import { Form, Input, Button, Checkbox } from "antd";

//components
import Alert from "Components/Shared/Alert/Alert";

//antd icon
import { UserOutlined, LockOutlined } from "@ant-design/icons";

//scss
import "./Signup.scss";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  //   const { loginButtonUiState, error } = this.props.login;
  //   if (loginButtonUiState === SUCCESS) {
  //     return <Redirect to="/" />;
  //   }

  return (
    <div className="signup">
      <div className="signup-body">
        <div className="signup-title">
          <h1>Sign up for Check Weather</h1>
        </div>
        <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="email"
            hasFeedback
            rules={[{ required: true, message: "Please input your Email!" }]}>
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            hasFeedback
            rules={[{ required: true, message: "Please input your Password!" }]}>
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
              //   loading={loginButtonUiState === IN_PROGRESS ? true : false}
              type="primary"
              htmlType="submit"
              className="login-form-button">
              Sign up
            </Button>
          </div>
        </Form>
      </div>
      {/* {loginButtonUiState === FAILED && <Alert message={error} type="error" showIcon />} */}
    </div>
  );
};

export default Signup;

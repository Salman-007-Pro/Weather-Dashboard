//main
import React from "react";
import { Link } from "react-router-dom";

//antd components
import { Result, Button } from "antd";

function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back Home</Link>
        </Button>
      }
    />
  );
}

export default NotFound;

//main
import React from "react";

//antd components
import { Result, Button } from "antd";

function NotFound({ history }) {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary" onClick={() => history.replace("/")}>
          Back Home
        </Button>
      }
    />
  );
}

export default NotFound;

import * as React from "react";

// constants
import { IN_PROGRESS, SUCCESS, FAILED } from "constants/loader";
// import { Redirect } from "react-router-dom";

// components
import Loader from "Components/Shared/Loader/Loader";
import Alert from "Components/Shared/Alert/Alert";

const Async = ({ uiState, onSuccess, onFailure, onProgress, error }) => {
  return (
    <>
      {uiState === IN_PROGRESS && onProgress()}
      {uiState === SUCCESS && onSuccess()}
      {uiState === FAILED && onFailure(error)}
    </>
  );
};
Async.defaultProps = {
  onProgress: () => <Loader />,
  onFailure: (message) => <Alert message={message} type="error" showIcon />,
};
export default Async;

//main
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "redux/store";

//app routes
import AppRoutes from "AppRoutes/AppRoutes";

//firebase instance
import firebase from "FirebaseConfig/config";

//style
import "styles/App.scss";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

//main
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "redux/store";


//app routes
import AppRoutes from "AppRoutes/AppRoutes";

//actions
import Actions from "redux/actions";

//style
import "styles/App.scss";

//firebase instance
import firebase from "FirebaseConfig/config";
import "firebase/firestore";

function App() {  
  // useEffect(() => {
  //   const apiCall = async () => {
  //     const response = await firebase.firestore().collection("users").get();
  //     console.log(response);
  //   };
  //   apiCall();
  // }, []);
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

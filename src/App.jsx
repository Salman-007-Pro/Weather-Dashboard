//main
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Store from "redux/store";

//axios
import axios from "axios";

//components
import CounterTest from "Components/CounterTest/CounterTest";

//style
import "styles/App.scss";

//firebase instance
import firebase from "FirebaseConfig/config";
import "firebase/firestore";

// ek all wali hai jis se country milay gi http://battuta.medunes.net/api/country/all/?key=ca6b0e43115ea85b899a54150ad0e1dc
// region nikal ne ki hai  `http://battuta.medunes.net/api/region/pk/all/?key=ca6b0e43115ea85b899a54150ad0e1dc`
// yeh region ki city nikal ne ke liye hai "http://battuta.medunes.net/api/city/pk/search/?region=Sindh&key=ca6b0e43115ea85b899a54150ad0e1dc"

function App() {
  // useEffect(() => {
  //   const callApi = async () => {
  //     try {
  //       const res = await axios.get(
  //         `https://api.openweathermap.org/data/2.5/onecall?lat=25.07266998&lon=67.20346069&exclude=hourly&appid=bed562c99cdf4399ea14ebd43d318b86`
  //       );
  //       // const res = await axios.get(
  //       //   `https://restcountries.eu/rest/v2/name/Pakistan`
  //       // );
  //       // const res = await axios.get(
  //       //   "http://battuta.medunes.net/api/city/pk/search/?region=Sindh&key=ca6b0e43115ea85b899a54150ad0e1dc"
  //       // );
  //       console.log(res);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };
  //   callApi();
  // }, []);
  // console.log(firebase);
  // var connectedRef = firebase.database().ref(".info/connected");
  // connectedRef.on("value", function (snap) {
  //   if (snap.val() === true) {
  //     alert("connected");
  //   } else {
  //     alert("not connected");
  //   }
  // });
  useEffect(() => {
    const apiCall = async () => {
      const response = await firebase.firestore().collection("users").get();
      console.log(response);
    };
    apiCall();
  }, []);
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <div>asdd</div>
        <CounterTest />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

//main
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//actions
import Actions from "redux/actions";

//scss
import "./CounterText.scss";

const { incCounter, decCounter } = Actions;

const CounterTest = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.Counter.counter);
  return (
    <div>
      <button onClick={() => dispatch(incCounter())}>Increment</button>
      <h2>Counter:{counter}</h2>
      <button onClick={() => dispatch(decCounter())}>Decreament</button>
    </div>
  );
};

export default CounterTest;

import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";


const App = () => {
  // to fetch the values
  const myState = useSelector((state) => state.changeTheNumber);
  // It is used to call the actions from the actions/index which was declared by us
  const dispatch = useDispatch();

  return (
    <>
      <div className = "provider">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using react and redux</h4>
        <div>
          <button title="decrement" onClick={()=>dispatch(decNumber())}>
            <span>-</span>
          </button>
          <input type="text" value={myState} />
          <button title="Increment" onClick={()=>dispatch(incNumber(5))}>
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default App;

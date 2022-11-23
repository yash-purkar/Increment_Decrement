import React, { useReducer } from 'react'
import "./CSS/index.css"

const reducer = (state, action) => {
  if (action.type === "INCR") {
    state = state + 1;
  }
  else if (action.type === "DECR" && state > 0) {
    state = state - 1
  }
  return state;
}
const UseReducer = () => {
  const initialData = 0;
  const [state, dispatch] = useReducer(reducer, initialData)


  return (
    <>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>UseState</h1>
      <div className="main_container">
        <div className='container'>
          <p className="data">
            {state}
          </p>
          <button onClick={() => dispatch({ type: "INCR" })}>+</button>
          <button onClick={() => dispatch({ type: "DECR" })}>-</button>
        </div>
      </div>
    </>
  )
}

export default UseReducer;
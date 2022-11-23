import React, { useState } from 'react'
import "./CSS/index.css"

const UseState = () => {
  const [myNum, setMyNum] = useState(0);


  return (
    <>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>UseState</h1>
      <div className="main_container">
        <div className='container'>
          <p className="data">
            {myNum}
          </p>
          <button onClick={() => setMyNum(myNum + 1)}>+</button>
          <button onClick={() => myNum > 0 ? setMyNum(myNum - 1) : setMyNum(myNum)}>-</button>
        </div>
      </div>
      <hr />
    </>
  )
}

export default UseState
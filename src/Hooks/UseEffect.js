import React, { useState, useEffect } from 'react'
import "./CSS/index.css"

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Counter(${myNum})`;
  })


  return (
    <>
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>UseState</h1>
      <div className="main_container">
        <div className='container'>
          <small style={{ paddingLeft: "27px", color: "gray" }}>{`(see the title)`}</small>
          <p className="data">
            {myNum}

          </p>
          <button onClick={() => setMyNum(myNum + 1)}>+</button>

        </div>

      </div>
      <hr />
    </>
  )
}

export default UseEffect;
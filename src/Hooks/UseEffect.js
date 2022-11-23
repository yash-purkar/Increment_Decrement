import React, { useState, useEffect } from 'react'
import "./CSS/index.css"

const UseEffect = () => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Counter(${myNum})`;
  })


  return (
    <>
      <div className="main_container">
        <div className='container'>
          <p className="data">
            {myNum}

          </p>
          <button onClick={() => setMyNum(myNum + 1)}>+</button>

        </div>

      </div>
    </>
  )
}

export default UseEffect;
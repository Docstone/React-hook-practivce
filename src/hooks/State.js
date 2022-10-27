import { useState } from "react";

const State= () => {
  //useState hooks
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  return (
    <>
      <div className="block">
        <h2>Incrementing and toggling with useState hook</h2>
        {count}
        {showText === true ? <p>Toggle text</p> : <p>na</p>}
        <button
          onClick={()=>{
            setCount(count + 1);
            setShowText(!showText)
          }}
        >
          Increment & toggle text
        </button>
      </div>
    </>
  )
}

export default State;
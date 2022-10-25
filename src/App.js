import './App.css';
import { useState, useReducer, useEffect, useRef, useLayoutEffect } from 'react';
import axios from 'axios';

//reducer function
const reducer = (state, action) => {
   switch(action.type) {
    case "INCREMENT":
      return {count: state.count + 1, showText: state.showText};
    case "TOGGLETEXT":
      return {count: state.count, showText: !state.showText};
    default: 
    return state;
   }
}

function App() {
  //useState hooks
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);

  //useReducer hooks
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true})

  //useEffect hook and api call
  const [ apiData, setApiData ] = useState("");
  const [ mailCount, setMailCount ] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => { 
      setApiData(res.data[mailCount].email)})
  }, [mailCount])

  //useRef hook
  const inputRef = useRef(null);
  const onChange = () => {
    console.log(inputRef.current.value)
  };
  const focus = () => {
    inputRef.current.focus()
  };
  const clear = () => {
    inputRef.current.value = "";
  };

  //useLayoutEffect hook
  const textRef = useRef(null);

  useLayoutEffect(()=>{
    console.log(textRef.current.value)
  },[])
  
  useEffect(()=>{
    textRef.current.value = "New Text";
  })

  return (
    <div className="App">
      <div class="block">
        <p>Incrementing and toggling with useState hook</p>
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

      <div className='block'> 
      <p>Incrementing and toggling with useReducer hook</p>
        {state.count}
        {state.showText === true ? <p>Toggle text</p> : <p>na</p>}
        <button
          onClick={()=>{
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "TOGGLETEXT" });
        }}>Increment & toggle text</button>
      </div>

      <div className='block'>
      <p>API call with axios and useEffect hook</p>
        <p>{apiData}</p>
        <button onClick={()=>{setMailCount(mailCount + 1)}}>Get new mail adress</button>
      </div>

      <div className='block'>
        <p>Focusing Elements and changing Values with useRef hook</p>
      <input type="text" placeholder="ex..." ref={inputRef} onChange={onChange}></input> 
      <div>
        <button onClick={focus}>Focus Text area</button>
        <button onClick={clear}>Clear Text area</button>
      </div>
      </div>

      <div className='block'>
        <p>Logging the text area default value with useLayoutEffect and modifying the value with useEffect</p>
        <input type="text" value="Default text"  ref={textRef}></input>
        <p></p>
      </div>
    </div>
  );
}

export default App;

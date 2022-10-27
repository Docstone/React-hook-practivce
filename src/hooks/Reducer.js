import { useReducer } from "react";

const Reducer = () => {
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
    
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true})

  return (
    <>   
       <div className='block'> 
            <h2>Incrementing and toggling with useReducer hook</h2>
            {state.count}
            {state.showText === true ? <p>Toggle text</p> : <p>na</p>}
            <button
            onClick={()=>{
                dispatch({ type: "INCREMENT" });
                dispatch({ type: "TOGGLETEXT" });
            }}>Increment & toggle text</button>
        </div>
    </>
  )
}

export default Reducer;
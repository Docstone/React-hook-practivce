import {useLayoutEffect, useEffect, useRef} from 'react'

const LayoutEffect = () => {
  //useLayoutEffect hook
  const textRef = useRef(null);
  

  useLayoutEffect(()=>{
    console.log("useEffect: " + textRef.current.value);
  },[])
  
  useEffect(()=>{
    textRef.current.value = "New Text";
  })
  return (
    <>
        <div className='block'>
            <h2>Logging the text area default value with useLayoutEffect and modifying the value with useEffect</h2>
            <input type="text" readOnly value="Default text"  ref={textRef}></input>
        </div>
    </>
  )
}

export default LayoutEffect;
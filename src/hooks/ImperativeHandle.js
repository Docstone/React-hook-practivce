import { useImperativeHandle, useRef, useState, forwardRef } from 'react'

const ImperativeHandle = () => {
  //useImperativeHandle hook
  const buttonRef = useRef(null);
  const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(true);

    useImperativeHandle(ref, () => ({
      parentToggle(){
        setToggle(!toggle)
      }
    }));
  
    return(
      <>  
        <button onClick={()=>{setToggle(!toggle)}}>
          Child Button
        </button>
        {toggle && <span>Toggled</span>}
      </>
   );
  });
  return (
    <div>
        <div className='block'>
            <h2>altering child component state with useImperativeHandle and useRef</h2>
            <button onClick={() => {buttonRef.current.parentToggle()}}>Parent Button</button>
            <Button ref={buttonRef}/>
        </div>
    </div>
  )
}

export default ImperativeHandle;
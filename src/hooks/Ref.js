import {useRef,  forwardRef} from 'react'

const Ref = forwardRef((prop, ref) => {
  //useRef hook
  const inputRef = useRef(null);

  const focus = () => {
    inputRef.current.focus()
  };
  const clear = () => {
    inputRef.current.value = "";
  };

  return (
    <>
        <div className='block'>
            <h2>Focusing Elements and changing Values with useRef hook</h2>
            <input type="text" placeholder="ex..." ref={inputRef}></input> 
            <div>
                <button onClick={focus}>Focus Text area</button>
                <button onClick={clear}>Clear Text area</button>
            </div>
        </div>
    </>
  )
})

export default Ref;
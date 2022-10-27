import { useCallback, useState }  from 'react';
import  Child  from './Child';

const Callback = () => {
    const data = 'the data';
    const [toggled, setToggled] = useState(false);

    const returnComment = useCallback(() => {
      return data;
    },[data])

  return (
    <>
    <div className="block">
      <Child returnComment={returnComment}/>
        <h2>avoid  rebuild function on state change with useCallback hook</h2>
        <button onClick={()=>{ setToggled(!toggled);}}>Toggle</button>
        {toggled && <p>Toggled</p>}
    </div>
    </>
  )
}
export default Callback;

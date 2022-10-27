import { useEffect, useState } from 'react'
import axios from 'axios';

const Effect = () => {
//useEffect hook and api call
  const [ apiData, setApiData ] = useState("");
  const [ mailCount, setMailCount ] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => { 
      setApiData(res.data[mailCount].email)})
  }, [mailCount])

  return (
    <div>
        <div className='block'>
            <h2>API call with axios and useEffect hook</h2>
            <p>{apiData}</p>
            <button onClick={()=>{setMailCount(mailCount + 1)}}>Get new mail adress</button>
        </div>
    </div>
  )
}

export default Effect;
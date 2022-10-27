import { useEffect, useState, useMemo }  from 'react';
import axios from "axios";

const Memo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((res)=>{
        setData(res.data)
      })
    },[])

    const findLongestName = (data) => {
        if(!data) return null;
        let longestName = "";
        for (let i= 0; i < data.length; i++) {
            const currName = data[i].name;
            if (currName.length > longestName.length){
                longestName = currName;
            }
        }
        console.log("useMemo: Api call")
        return longestName;
    }
    //useMemo hook
    const getLongestName = useMemo(()=> findLongestName(data), [data])

  return (
    <>
    <div className="block">
        <h2>Memoization of function return value with useMemo hook</h2>
        {toggle && <p>longest Name :{getLongestName}</p>}
        <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
        <h3>mapping and displaying all the names</h3>
        {toggle && data && data.map((comment) => 
        <p key={comment.name}>{comment.name}</p>)}
    </div>
    </>
  )
}

export default Memo;
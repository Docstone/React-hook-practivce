import { appContext } from "./Context";
import { useContext } from "react";

const Login = () =>{
    const {setUsername} = useContext(appContext)
    return(
        <>
            <input type="text" onChange={(e)=>{setUsername(e.target.value)}}></input>
        </>
    )
}

export default Login;
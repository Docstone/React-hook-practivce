import { appContext } from "./Context";
import { useContext } from "react";

const User = () =>{
    const {username} = useContext(appContext)

    return(
        <>
            <p>User: {username}</p>
        </>
    )
}

export default User;
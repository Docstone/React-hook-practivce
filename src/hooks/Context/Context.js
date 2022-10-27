import { createContext, useState} from 'react';
import User from "./User";
import Login from "./Login";

export const appContext = createContext(null);

const Context = () => {
 const [username, setUsername] = useState("");

  return (
    <appContext.Provider value={{username, setUsername}}>
        <div className="block">
            <h2>Passing props via useContext hook</h2>
            <Login/>
            <User/>
        </div>
    </appContext.Provider>
  )
}

export default Context;
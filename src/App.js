import './App.css';
import State from "./hooks/State"
import Reducer  from "./hooks/Reducer";
import Ref from "./hooks/Ref";
import Effect from "./hooks/Effect";
import LayoutEffect from "./hooks/LayoutEffect";
import ImperativeHandle from "./hooks/ImperativeHandle"
import Context from "./hooks/Context/Context";
import Memo  from './hooks/Memo';
import Callback from './hooks/Callback/Callback';


function App() {
  return (
    <div className="App">
        <State/>
        <Reducer/>
        <Ref/>
        <Effect/>
        <LayoutEffect/>
        <ImperativeHandle/>
        <Context />
        <Memo />
        <Callback />
    </div>
  );
}




export default App;

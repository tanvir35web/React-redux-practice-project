import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, logIn, logOut, reset } from "./Redux/Action";

function App() {

    const counter = useSelector((state) => state.counter);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const authentication = auth ? (
        <div>
            <p>Hello, I am Tanvirul Islam. Now I am learning React - Redux</p>
        </div>
    ) : null
   
    

    return (
        <>
        
            <div>
                <h1>A little Redux Project</h1>
                <h3>Counter</h3>
                <h3>{counter}</h3>
                <button type="button" onClick={() => dispatch(increment())}> Increment </button>
                <button type="button" onClick={() => dispatch(decrement())}> Decrement </button>
                <button type="button" onClick={() => dispatch(reset())}> Reset </button>

                <h2>For Logged in User Only</h2>
                <p>Login to see a secret about me</p>
                <button onClick={() => dispatch(logIn())}>Login</button>
                <button onClick={() => dispatch(logOut())}>Logout</button>
                {authentication}
                
                
            </div>
        </>
    );
}

export default App;

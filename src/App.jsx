import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, logIn, logOut, reset } from "./Redux/Action";
import Button from "./components/Button";

function App() {
    const counter = useSelector((state) => state.counter);
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const authentication = auth ? (
        <div>
            <p>Hello, I am Tanvirul Islam. Now I am learning React - Redux</p>
        </div>
    ) : null;

    return (
        <>
            <div>
                <h1>A little Redux Project</h1>
                <h3>Counter</h3>
                <h3>{counter}</h3>

                <Button
                    onClick={() => dispatch(increment())}
                    label={"Increment"}
                />
                <Button
                    onClick={() => dispatch(decrement())}
                    label={"Decrement"}
                />
                <Button onClick={() => dispatch(reset())} label={"Reset"} />

                <h2>For Logged in User Only</h2>
                <p>Login to see a secret about me</p>

                <Button onClick={() => dispatch(logIn())} label={"Login"} />
                <Button onClick={() => dispatch(logOut())} label={"Logout"} />

                {authentication}
            </div>
        </>
    );
}

export default App;

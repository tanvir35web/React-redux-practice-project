import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, logIn, logOut, reset } from "./Redux/Action";
import Button from "./components/Button";
import SubTittle from "./components/SubTittle";

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
            <div className="bg-black w-full h-[100vh] text-white flex flex-col items-center gap-1 justify-center">
                <h1 className="text-5xl mb-8 border py-4 px-8 rounded-xl border-yellow-500">
                    A LITTLE REDUX PROJECT
                </h1>
                <SubTittle label={"Counter App"} />
                <h3 className="text-5xl p-6 m-4 rounded-xl bg-green-700 font-bold">
                    {counter}
                </h3>

                <div className="flex gap-2 mb-4">
                    <Button
                        onClick={() => dispatch(decrement())}
                        label={"Decrement"}
                    />
                    <Button onClick={() => dispatch(reset())} label={"Reset"} />
                    <Button
                        onClick={() => dispatch(increment())}
                        label={"Increment"}
                    />
                </div>

                <SubTittle
                    className="text-yellow-500 my-4"
                    label={"For Logged in User Only"}
                />
                <p className="my-3">Login to see a secret about me</p>

                <div className="flex gap-2 mb-4">
                    <Button onClick={() => dispatch(logIn())} label={"Login"} />
                    <Button
                        onClick={() => dispatch(logOut())}
                        label={"Logout"}
                    />
                </div>

                {authentication}
            </div>
        </>
    );
}

export default App;

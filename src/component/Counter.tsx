import { useSelector, useDispatch } from "react-redux";
import {decrement, increment, reset} from "./counterSlice";
import { RootState } from "../../store";


const Counter = () => {
    const count = useSelector((state: RootState )=> state.counterR.count);
    const dispatch= useDispatch();

    const handelIncrement = () => {
        dispatch(increment());
    };

    const handelReset = () => {
        dispatch(reset());
    };

    const handelDecrement = () => {
        dispatch(decrement());
    };

    return(
        <div>
            <h2>count: {count}</h2>
            <button onClick={handelIncrement}>+</button>
            <button onClick={handelReset}>Reset</button>
            <button onClick={handelDecrement}>-</button>
        </div>
    );
};

export default Counter;
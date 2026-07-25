import { useState } from "react";
import './Counter.css';

function Counter () {
    const [count, setCount] = useState(0);
    return (
        <div className="Counter-container">
            <p>You've clicked {count} times</p>
            <button id="btn" onClick={() => {setCount(count + 1)}}>Click</button>
        </div>
    )
}
export default Counter;
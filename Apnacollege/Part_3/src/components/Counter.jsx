import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    let incCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <h4>Count : {count}</h4>
            <button onClick={incCount}>Inc Count</button>
        </div>
    )
}


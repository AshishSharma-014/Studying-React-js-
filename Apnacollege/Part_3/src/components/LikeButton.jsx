import { useState } from "react";
export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);
    let [count , setCount] = useState(0);

    let toggleLike = () => {
        setIsLiked(!isLiked);
        setCount(count + 1);

    }
    
    return (
        <div>
            <p>Count : {count}</p>
            <p>
                <i
                    onClick={toggleLike} 
                    className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
                    style={{ color: "rgb(255, 0, 0)" }}
                ></i>
            </p>
        </div>
    )
}

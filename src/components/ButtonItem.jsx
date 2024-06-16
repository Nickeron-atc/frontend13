import React, {useState} from 'react'

const ButtonItem = function() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }
 
    return (
        <div>
            <button onClick={increment}>Submit</button>
        </div>
    )
}

export default ButtonItem;
import { useState, useEffect, useLayoutEffect } from "react"


function Content(){
    const [count, setCount] = useState(0)

    useLayoutEffect(() => {
        if (count > 3){
            setCount(0)
        }
    }, [count])
    
    const handleCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleCount}>Click</button>
        </div>
    )
}

export default Content
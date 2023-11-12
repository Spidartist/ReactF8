import { useState, useEffect } from "react"

const tabs = ["posts", "comments", "albums"]

function Content(){
    const [countdown, setCountdown] = useState(180)

    useEffect(() => {
        const timeID = setInterval(() => {
            setCountdown(prev => prev - 1)
            console.log("Countdown...")
        }, 1000);

        return () => clearInterval(timeID)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content
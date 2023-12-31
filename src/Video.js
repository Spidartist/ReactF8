import video1 from "./videos/video-1.mp4"
import { useRef, useImperativeHandle } from "react"
import { forwardRef } from "react"

function Video(props, ref) {
    const videoRef = useRef()

    useImperativeHandle(ref, () => ({
        play() {
            videoRef.current.play()
        },
        pause() {
            videoRef.current.pause()
        },
    }))

    return (
        <video
            ref={videoRef}
            src={video1} 
            width={280}
        />
    )
}

export default forwardRef(Video)
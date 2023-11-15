import video1 from "./videos/video-1.mp4"
import { useRef } from "react"
import { forwardRef } from "react"

function Video(props, ref) {

    return (
        <video
            ref={ref}
            src={video1} width={280}
        />
    )
}

export default forwardRef(Video)
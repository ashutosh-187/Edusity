import React, { useRef } from "react";
import "./VideoPlayer.css"
import campusVideo from '../../assets/collegeVideo.mp4'

function VideoPlayer({playState, setPlayState}) {
    const player = useRef(null)
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
    return (
        <div className={`videoPlayer ${playState?'':"hide"}`} ref={player} onClick={closePlayer}>
            <video src={campusVideo} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer;

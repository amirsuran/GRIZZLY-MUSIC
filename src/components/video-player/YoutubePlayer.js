import React from "react";
import YouTube from "react-youtube"


function YouTubePlayer() {
    const videoId = "https://youtu.be/kqYTYlLjKYE?feature=shared";

    const opts = {
        height: "360",
        width: "640",
        playerVars: {
        },
    };

    return (
        <div>
            <h1 className="text-white font-[inter]">VideoPlayer </h1>
            <YouTube videoId={videoId} opts={opts} />
        </div>
    );
}

export default YouTubePlayer;
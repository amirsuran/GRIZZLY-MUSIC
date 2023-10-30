import React from "react";
import VPlayer from "./vplayer";
import YouTubePlayer from "./YoutubePlayer";


function VideoPlayer() {
  return (
    <div className="inline">
      <VPlayer />
      <YouTubePlayer />
    </div>
  );
}

export default VideoPlayer;
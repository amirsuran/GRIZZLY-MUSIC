import React from "react";
import { Player, ControlBar } from "video-react";
import "video-react/dist/video-react.css";
import Wekeend from "./../../Data/video-file/Wekeend.mp4"

function VPlayer() {
  return (
    <div>
      <h1 className="text-white font-[inter]"> VideoPlayer </h1>
      <Player >
        <source
          src={Wekeend}
          type="video/mp4"
        />
        <ControlBar autoHide={false} />
      </Player>
    </div>
  );
}

export default VPlayer;
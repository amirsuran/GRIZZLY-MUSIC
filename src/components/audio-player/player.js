import { useEffect, useState } from "react";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Player(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState("0:00");
  const [seconds, setSeconds] = useState(0);

  const [play, { pause, duration, sound, error }] = useSound(props.music);

  useEffect(() => {
    if (error) {
      console.error("An error occurred while loading the audio:", error);
    }
  }, [error]);

  useEffect(() => {
    if (duration) {
      const totalSeconds = Math.floor(duration / 1000);
      setTime(formatTime(totalSeconds));
    }
  }, [duration]);

  useEffect(() => {
    if (sound && isPlaying) {
      const interval = setInterval(() => {
        const currentSeconds = Math.floor(sound.seek());
        setSeconds(currentSeconds);
        setTime(formatTime(currentSeconds));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [sound, isPlaying]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="component">
      <div className="text-white flex justify-center">
        <h3 className="title">{props.title}</h3>
      </div>
      <div className="text-white">
        <div className="time flex justify-center">
          <p>{time}</p>
        </div>
        <div className="flex justify-center">
          <input
            type="range"
            min="0"
            max={duration / 1000}
            value={seconds}
            className="timeline"
            onChange={(e) => {
              sound.seek(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

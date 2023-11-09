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
        <button className="playButton text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-2xl px-3 py-3 text-center mr-2 mb-22 ">
          <IconContext.Provider value={{}}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-2xl px-3 py-3 text-center mr-2 mb-22 " onClick={playingButton}>
            <IconContext.Provider value={{}}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-2xl px-3 py-3 text-center mr-2 mb-22  " onClick={playingButton}>
            <IconContext.Provider value={{}}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-2xl px-3 py-3 text-center mr-2 mb-22  ">
          <IconContext.Provider value={{}}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}
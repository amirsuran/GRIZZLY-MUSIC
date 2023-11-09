import "./App.css";
import { Fragment, useState } from "react";
import Button from "./components/Multi-action-button";
import MainPage from "./components/home/main";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login page/LoginForm";
import RegisterForm from "./components/login page/RegisterForm";
import Podcast from "./components/audio-player/Podcast/podcast";
import VideoPlayer from "./components/video-player/VideoPage";
import MusicPage from "./components/audio-player/MusicPage/MusicPage";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="navbar-text-div">
        <div className="logo-home-left flex">
          <img
            src="https://img.freepik.com/premium-photo/cool-neon-party-bear-sunglasses-generative-ai_108146-4134.jpg"
            title="nagir rosh eeee"
            alt=""
            className="gay-grizzly-img rounded-full box-border h-16 w-16"
          />
          <div className="nav-text-left mt-3 ">
            <Link
              className="nav-links-home text-5xl font-extrabold "
              to="/"
            ><span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl">
                GayGrizzly
              </span>
            </Link>
          </div>
        </div>

        <div className="navbar-text-right mt-2 text-white space-x-3 font-[Inter] text-lg ">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/music">Music</Link>
          <Link to="/videoplayer">Video</Link>
          <div className="relative inline-block">
            <Button
              onClick={() => {
                setOpen(!open);
              }}
              className="multi-action-button text-white"
            >
              Playlist
            </Button>

            {open && (
              <div className="bg-gray-500 mt-1 absolute top-18 w-100 h-100 text-center font-[Inter] shadow-2xl rounded-lg p-2 ">
                <Button>Rap</Button>
                <Button>Jazz</Button>
                <Button>Pop</Button>
              </div>
            )}
          </div>
          <div className="inline-block">
            <Link to="/podcast">Podcasts</Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/videoplayer" element={<VideoPlayer />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;

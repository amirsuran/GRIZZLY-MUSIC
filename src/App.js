import "./App.css";
import { Fragment, useState } from "react";
import Button from "./components/Multi-action-button";
import MainPage from "./components/home/main";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login page/LoginForm";
import RegisterForm from "./components/login page/RegisterForm";
import Podcast from "./components/audio-player/Podcast/podcast";

function App() {
  const [open, setopen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <Fragment>
      <div className="navbar-text-div">
        <div className="logo-home-left flex">
          <img
            src="https://img.freepik.com/premium-photo/cool-neon-party-bear-sunglasses-generative-ai_108146-4134.jpg"
            title="Logo"
            alt=""
            className="gay-grizzly-img rounded-full box-border h-16 w-16"
          />
          <div className="nav-text-left mt-3 ">
            <Link
              className="nav-links-home bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
              to="/"
            >
              GayGrizzly
            </Link>
          </div>
        </div>

        <div className="navbar-text-right mt-2 text-white space-x-3 font-[Inter] text-lg ">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <div className=" relative inline-block  ">
            <Button
              onClick={() => {
                setopen(!open);
              }}
              class="multi-action-button"
              className=" text-white"
            >
              Music
            </Button>

            {open && (
              <div className=" bg-gray-500 mt-1 absolute top-18 w-100 h-100 text-center font-[Inter] shadow-2xl rounded-lg p-2 ">
                <Button>Rap</Button>
                <Button>Jazz</Button>
                <Button>Pop</Button>
              </div>
            )}
          </div>
          <div className="inline-block">
            <Link to="/podcast">Podcasts</Link>
          </div>
          <a className="navbar-text-right" href="/...">
            Playlist
          </a>
          <a className="navbar-text-right" href="/...">
            Videos
          </a>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/podcast" element={<Podcast />} />
      </Routes>
    </Fragment>
  );
}

export default App;
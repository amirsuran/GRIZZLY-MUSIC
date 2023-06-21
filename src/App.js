import "./App.css";
import { Fragment, useState } from "react";
import Button from "./components/Multi-action-button";
import MainPage from "./components/home/main";
import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/login page/LoginForm";
import RegisterForm from "./components/login page/RegisterForm";

function App() {
  const [open, setopen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <Fragment>
      <div className="navbar-text-div">
        <div className="navbar-text-left font-[Inter]">
          <Link className="nav-links-home" to="/">
            GayGrizzly
          </Link>
        </div>
        <div className="navbar-text-right text-white space-x-3 font-[Inter] ">
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
              <div className=" bg-gray-500 mt-1 absolute top-11 w-100 h-100 text-center font-[Inter] shadow-2xl rounded-lg p-2 ">
                <Button>Rap</Button>
                <Button>Jazz</Button>
                <Button>Pop</Button>
              </div>
            )}
          </div>

          <a className="navbar-text-right" href="/....">
            Podcasts
          </a>
          <a className="navbar-text-right" href="/....">
            Playlist
          </a>
          <a className="navbar-text-right" href="/....">
            Videos
          </a>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;

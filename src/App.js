import "./App.css";
import { Fragment, useState } from "react";
import List from "./components/List";
import { playlist2 } from "./components/SecendData";
import { playlist } from "./components/Data";
import Button from "./components/Multi-action-button";
import { Login } from "./LoginPage/Login";
import { Register } from "./LoginPage/Register";

function App() {
  const [open, setopen] = useState(false);
  return (
    <Fragment>
      <div className="navbar-text-div">
        <div className="navbar-text-left">
          <a className="nav-links-home" href="/index.html">
            GayGrizzly
          </a>
        </div>
        <div className="navbar-text-right font-[Inter] text-white space-x-3 text-base	 ">
          <div className=" relative inline-block  ">
            <a className="navbar-text-right mr-3" href="./Login/Login.js">
              Login Amir
            </a>
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
      <div className="top-main-nav">
        <figure className="top-div-nav">
          <img
            src="https://assets.rjassets.com/static/content_items/images/2022/10/27/188892567abb7f6.jpg"
            title="Erfan And Jidal"
            alt=""
            className="top-img-nav"
          />
          <figcaption className="text-in-img">Erfan & Jidal</figcaption>
        </figure>
        <figure className="top-div-nav">
          <img
            className="top-img-nav"
            src="https://assets.rjassets.com/static/content_items/images/2022/10/28/8e97ad95ceb3e06.jpg"
            title="Maziar Falahi"
            alt=""
          />
          <figcaption className="text-in-img">Maziar Falahi</figcaption>
        </figure>
      </div>
      <List data={playlist2} title="PlayList" />
      <List data={playlist} title="PlayList" />
    </Fragment>
  );
}

export default App;

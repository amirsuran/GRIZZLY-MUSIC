import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className="navbar-text-div">
        <div className="navbar-text-left">
          <a className="nav-links-home" href="/index.html">
            GayGrizzly
          </a>
        </div>
        <div className="navbar-text-right">
          <a
            className="navbar-text-right"
            href="https://www.radiojavan.com/mp3s"
          >
            Music
          </a>
          <a className="navbar-text-right" href="/....">
            Podcasts
          </a>
          <a className="navbar-text-right" href="">
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
            className="top-img-nav"
          />
          <figcaption className="text-in-img">Erfan & Jidal</figcaption>
        </figure>
        <figure className="top-div-nav">
          <img
            className="top-img-nav"
            src="https://assets.rjassets.com/static/content_items/images/2022/10/28/8e97ad95ceb3e06.jpg"
            title="Maziar Falahi"
          />
          <figcaption className="text-in-img">Maziar Falahi</figcaption>
        </figure>
      </div>
    </Fragment>
  );
}

export default App;

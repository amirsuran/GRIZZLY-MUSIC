import React, { Fragment } from "react";
import List from "../List";
import { playlist2 } from "../SecendData";
import { playlist } from "../Data";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <Fragment>
      <div className="top-main-nav font-[Inter]">
        <Link to="/qala">
          <figure className="top-div-nav">
            <img
              src="https://assets.rjassets.com/static/content_items/images/2022/10/27/188892567abb7f6.jpg"
              title="Erfan And Jidal"
              alt=""
              className="top-img-nav"
            />
            <figcaption className="text-in-img font-[Inter]">
              Erfan & Jidal
            </figcaption>
          </figure>
        </Link>
        <figure className="top-div-nav">
          <img
            className="top-img-nav"
            src="https://assets.rjassets.com/static/content_items/images/2022/10/28/8e97ad95ceb3e06.jpg"
            title="Maziar Falahi"
            alt=""
          />
          <figcaption className="text-in-img font-[Inter]">
            Maziar Falahi
          </figcaption>
        </figure>
      </div>
      <List data={playlist2} title="PlayList" />
      <List data={playlist} title="PlayList" />
    </Fragment>
  );
};

export default MainPage;

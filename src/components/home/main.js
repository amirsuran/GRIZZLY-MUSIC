import React, { Fragment } from "react";
import List from "../List";
import { playlist2 } from "../SecendData";
import { playlist } from "../Data";
import Player from "../audio-player/player";
import { musicList } from "../audio-player/headerMusic";


const MainPage = () => {
  return (
    <Fragment>
      <div className="top-main-nav font-[Inter] flex justify-evenly w-full rounded-full">
        {musicList.map(item => (
          <div className="flex flex-col gap-2 items-center justify-center" key={item.id}>
            <figure className="top-div-nav">
              <img
                src={item.imageCover}
                title={item.artist}
                alt=""
                className="top-img-nav bg-auto"
              />
              <figcaption className="text-in-img font-[Inter]">
                {item.title}
              </figcaption>
            </figure>
            <figure>
              <div className="rounded-full">
                <Player artist={item.artist} music={item.music} />
              </div>
            </figure>
          </div>
        ))}
      </div>
      <List data={playlist} title="PlayList" />
      <List data={playlist2} title="PlayList" />
    </Fragment>
  );
};

export default MainPage;
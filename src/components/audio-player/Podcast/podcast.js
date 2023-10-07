import React, { useState } from 'react';
import Player from "./../player";
import PodcastList from "./PodcastList";
export default function Podcast() {  

  const [currentSong, setCurrentSong] = useState(null);

  const podcasts = [
    { title: 'Radio Alizo', music: 'alizo' },
    { title: 'Gilas', music: 'gilas.mp3' },
  ];
  

  const handleSongClick = (song) => {
    setCurrentSong(song);
};


  return (
    <div className="App">
      <div className="grid grid-flow-col">
        <div className="singerslist bg-gradient-to-r from-blue-600 to-red-600 text-white">
          <h1>Podcast List</h1>
          <ul>
              {podcasts.map((podcast, index) => {
                return <li key={index} onClick={() => {
                  handleSongClick(podcast.music)
                }}>{podcast.title}</li>
              })} 
          </ul>
        </div>
            <div className='text-white'>
            <PodcastList songs={podcasts} onSongClick={handleSongClick} />
            {currentSong && <Player currentSong={currentSong} />}
        </div>
      </div>
    </div>
  );
}

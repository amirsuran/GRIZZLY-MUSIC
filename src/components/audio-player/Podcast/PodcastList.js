import React from 'react';





const PodcastList = ({ songs, onSongClick }) => {
    
    return (
        <div>
            <h2>Music List</h2>
            sfgdfdgdfg <br/>
            xfgxfgfxg
            {<ul>
                {songs.map((song, index) => (
                    <li key={index} onClick={() => onSongClick(song)}>
                        {song.title}
                    </li>
                ))}
            </ul>}
        </div>
    );
};

export default PodcastList;

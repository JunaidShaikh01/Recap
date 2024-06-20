import React, { useEffect, useState } from "react";
import axios from "axios";

const SongList = () => {
  const [songs, setSongs] = useState([]);
  console.log("SongList", songs);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/dashboard/songs"
        );
        setSongs(response.data);
      } catch (error) {
        console.error("There was an error fetching the songs!", error);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div>
      <h2>Song List</h2>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            <p>Name: {song.name}</p>
            <p>Singer: {song.singer}</p>
            <p>Language: {song.language}</p>
            <p>Category: {song.category}</p>
            <img
              src={`http://localhost:5000${song.imageUrl}`}
              alt={song.name}
              width="100"
            />
            <audio controls>
              <source
                src={`http://localhost:5000${song.songUrl}`}
                type="audio/mpeg"
              />
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;

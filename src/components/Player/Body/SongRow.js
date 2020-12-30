import React from "react";
import "./SongRow.css";

export default function SongRow({
  index,
  track = "test",
  date,
  duration,
  playSong,
}) {
  return (
    <div className="songRow" onClick={playSong(track.uri)}>
      {/* onClick={playSong(track.id)}*/}
      <h4 className="key">{index}</h4>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="trackName">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")} </p>
      </div>
      <p className="albumName">{track.album.name}</p>
      <p className="date">{formatDate(date)}</p>
      <p className="time">{duration}</p>
    </div>
  );
}

function formatDate(date) {
  const millis = Date.parse(date);
  const newDate = new Date(millis);
  return newDate.toDateString();
}

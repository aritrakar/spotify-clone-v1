import React from "react";
import "./SongRow.css";

export default function SongRow({ track = "test", index, duration }) {
  return (
    <div className="songRow">
      {/* onClick={playSong(track.id)}*/}
      <h4 className="key">{index}</h4>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="trackName">
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist) => artist.name).join(", ")} </p>
      </div>
      <p className="albumName">{track.album.name}</p>
      <p className="date">Date</p>
      <p className="time">{formatTime(duration)}</p>
    </div>
  );
}

function formatTime(time) {
  var minute = time / 60000;
  var seconds = (minute - Math.floor(minute)) * 60;
  var formattedSeconds = "00";
  if (seconds < 10) {
    formattedSeconds = "0" + Math.floor(seconds).toString();
  } else if (seconds >= 10) {
    formattedSeconds = Math.floor(seconds).toString();
  }
  return Math.floor(minute).toString() + ":" + formattedSeconds;
}

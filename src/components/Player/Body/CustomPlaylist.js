import React from "react";
import "./Body2.css";
import Header from "../Header/Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../../../DataLayer";
import {
  FavoriteBorder,
  MoreHoriz,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";

export default function CustomPlaylist({ playlist }) {
  const [{ spotify, token }, dispatch] = useDataLayerValue();

  const playPlaylist = () => {
    console.log("Clicked playPlaylist button, id:", playlist?.uri);
    console.log("TOKEN: ", token);
    spotify
      .play({
        access_token: token,
        context_uri: playlist?.uri,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        access_token: token,
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log("Current Playing track: ", r);
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const tracksArray = [];
  const durations = [];
  for (let i = 0; i < playlist?.tracks?.items.length; i++) {
    const t = formatTime(playlist?.tracks.items[i].track.duration_ms);
    tracksArray.push(
      <SongRow
        index={i + 1}
        key={i}
        track={playlist?.tracks.items[i].track}
        date={playlist?.tracks.items[i].added_at}
        duration={t}
        playSong={playSong}
      />
    );
    durations.push(t);
  }

  return (
    <div className="body">
      <Header spotify={spotify} />
      <img src={playlist?.images[0]?.url} alt="" id="blurred" />
      <div className="body__info">
        <img src={playlist?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>
            <strong>{playlist?.name}</strong>
          </h2>
          <p>{playlist?.description}</p>
          <p>
            {playlist?.tracks?.total} songs - {sumTime(durations)}
          </p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledOutlined
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteBorder fontSize="large" className="body__other" />
          <MoreHoriz className="body__other" />
        </div>
        <div className="title__text">
          <h4 className="hash">#</h4>
          <h4 className="title">TITLE</h4>
          <h4 className="album">ALBUM</h4>
          <h4 className="date">DATE ADDED</h4>
          <h4 className="time">TIME</h4>
        </div>
        <hr className="hr" />
        {tracksArray}
      </div>
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

function sumTime(durations) {
  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  for (let i = 0; i < durations.length; i++) {
    let items = durations[i].split(":");
    minutes += parseInt(items[0]);
    seconds += parseInt(items[1]);
  }
  minutes += Math.floor(seconds / 60);
  seconds = seconds % 60;
  hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  if (hours === 1) {
    const totalTime = hours.toString() + " hr " + minutes.toString() + " m";
    return totalTime;
  } else if (hours > 1) {
    const totalTime = hours.toString() + " hrs " + minutes.toString() + " m";
    return totalTime;
  } else {
    const totalTime = minutes.toString() + " m " + seconds.toString() + " s";
    return totalTime;
  }
}

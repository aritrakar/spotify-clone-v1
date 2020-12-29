import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import SongRow from "./SongRow";
import { useDataLayerValue } from "../../../DataLayer";
import {
  FavoriteBorder,
  MoreHoriz,
  PlayCircleFilledOutlined,
} from "@material-ui/icons";

export default function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  const tracksArray = [];
  for (let i = 0; i < discover_weekly?.tracks.items.length; i++) {
    tracksArray.push(
      <SongRow
        index={i + 1}
        key={i}
        track={discover_weekly?.tracks.items[i].track}
        duration={discover_weekly?.tracks.items[i].track.duration_ms}
      />
    );
  }
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>
            <strong>Discover Weekly</strong>
          </h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledOutlined className="body__shuffle" />
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

/*
{discover_weekly?.tracks.items.map((item, key) => {
          return <SongRow track={item.track} />;
        })}
        */

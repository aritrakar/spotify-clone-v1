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
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledOutlined className="body__shuffle" />
          <FavoriteBorder fontSize="large" className="body__other" />
          <MoreHoriz className="body__other" />
        </div>

        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
}

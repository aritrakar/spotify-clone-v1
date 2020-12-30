import React, { useEffect } from "react";
import "./Player.css";
import Sidebar from "./Sidebar/Sidebar";
//import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { useDataLayerValue } from "../../DataLayer";
import CustomPlaylist from "./Body/CustomPlaylist";

export default function Player({ spotify }) {
  const [{ current_playlist }] = useDataLayerValue();

  useEffect(() => {});

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <CustomPlaylist playlist={current_playlist} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

/*{current_playlist ? (
          <CustomPlaylist playlist={current_playlist} />
        ) : (
          <Body spotify={spotify} />
        )}
        */

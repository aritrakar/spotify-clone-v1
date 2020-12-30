import React from "react";
import "./SidebarOption.css";
//import { useDataLayerValue } from "../../../DataLayer";
//import CustomPlaylist from "../Body/CustomPlaylist";

export default function SidebarOption({ option = "test", Icon, playlist }) {
  //const [dispatch] = useDataLayerValue();

  /*
  const handleOptionClick = (current) => {
    dispatch({
      type: "SET_CURRENT_PLAYLIST",
      current_playlist: current,
    });
  };
  */

  console.log("playlist: ", playlist);
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{option}</h4>
      ) : (
        <p> {option}</p> //onClick={handleOptionClick(playlist)}
      )}
    </div>
  );
}

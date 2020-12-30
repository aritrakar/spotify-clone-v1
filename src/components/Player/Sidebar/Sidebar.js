import React from "react";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "../../../DataLayer";

export default function Sidebar() {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} option="Home" />
      <SidebarOption Icon={SearchIcon} option="Search" />
      <SidebarOption Icon={LibraryMusicIcon} option="Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, key) => {
        return (
          <SidebarOption key={key} option={playlist.name} playlist={playlist} />
        );
      })}
    </div>
  );
}

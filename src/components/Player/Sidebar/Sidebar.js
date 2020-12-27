import React from "react";
import "./Sidebar.css";
//import HomeIcon from "@material-ui/icons/Home";
//import SearchIcon from "@material-ui/icons/Search";
//import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import SidebarOption from "./SidebarOption";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon="" option="Home" />
      <SidebarOption Icon="" option="Search" />
      <SidebarOption Icon="" option="Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
    </div>
  );
}

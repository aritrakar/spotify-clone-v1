import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar/Sidebar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

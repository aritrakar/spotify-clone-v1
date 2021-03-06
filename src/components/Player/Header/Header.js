import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../DataLayer";

export default function Header({ spotify }) {
  const [{ user }] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Music" type="text"></input>
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="AK" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

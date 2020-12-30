import React, { useEffect } from "react";
import "./App.css";
import { Player, Login } from "./components";
import { getTokenFromUrl } from "./api/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      console.log("HASH: ", hash);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("TOKEN: ", _token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getMyDevices().then((devices) => {
        console.log("DEVICES: ", devices);
        dispatch({
          type: "SET_DEVICES",
          devices: devices,
        });
      });

      spotify
        .getUserPlaylists({ options: { limit: null } })
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

      spotify.getPlaylist("37i9dQZEVXcUgUERTsWnNT").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  });
  console.log("TOKEN2: ", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

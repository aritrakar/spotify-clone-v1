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
    console.log("HASH: ", hash);
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

      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });

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
          console.log(playlists);
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });

      spotify.getPlaylist("37i9dQZEVXcUgUERTsWnNT").then((response) => {
        // 37i9dQZEVXcUgUERTsWnNT
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
        dispatch({
          type: "SET_CURRENT_PLAYLIST",
          current_playlist: response,
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

import React, { useEffect, useState } from "react";
import "./App.css";
import { Player, Login } from "./components";
import { getTokenFromUrl } from "./api/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      console.log("Token received:", _token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user: ", user.display_name);
      });
    }
  }, []);

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { Player, Login } from "./components";
import { getTokenFromUrl } from "./api/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      //setToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      console.log("Token received:", _token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        //console.log("user: ", user.display_name);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
    spotify.getUserPlaylists().then((playlists) => {
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
  });

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";
import { useDataLayerValue } from "../../../DataLayer";

export default function Footer({ spotify }) {
  const [{ item, playing, shuffle, repeat }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      console.log("getMyCurrentPlaybackState: ", r);

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify, dispatch]);

  const handleShuffle = () => {
    if (shuffle) {
      dispatch({
        type: "SET_SHUFFLE",
        shuffle: false,
      });
    } else {
      //spotify.shuffle();
      dispatch({
        type: "SET_SHUFFLE",
        shuffle: true,
      });
    }
  };

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "TOGGLE_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "TOGGLE_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const handleRepeat = () => {
    if (repeat) {
      dispatch({ type: "SET_REPEAT", repeat: false });
    } else {
      dispatch({ type: "SET_REPEAT", repeat: true });
    }
  };
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__center__main">
        <div className="footer__center">
          <div className="footer__icons">
            {shuffle ? (
              <ShuffleIcon className="footer__green" onClick={handleShuffle} />
            ) : (
              <ShuffleIcon onClick={handleShuffle} />
            )}
            <SkipPreviousIcon className="footer__icon" onClick={skipPrevious} />
            {playing ? (
              <PauseCircleOutlineIcon
                className="footer__icon"
                fontSize="large"
                onClick={handlePlayPause}
              />
            ) : (
              <PlayCircleOutlineIcon
                className="footer__icon"
                fontSize="large"
                onClick={handlePlayPause}
              />
            )}

            <SkipNextIcon className="footer__icon" onClick={skipNext} />
            {repeat ? (
              <RepeatIcon className="footer__green" onClick={handleRepeat} />
            ) : (
              <RepeatIcon onClick={handleRepeat} />
            )}
          </div>

          <div className="slider">
            <p>0:00</p>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
            <p>3:00</p>
          </div>
        </div>
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

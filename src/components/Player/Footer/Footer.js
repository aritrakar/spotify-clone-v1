import React from "react";
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
//import { useDataLayerValue } from "../../../DataLayer";

export default function Footer() {
  //const [{ item, playing }, dispatch] = useDataLayerValue(); //albumImage
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg" //{albumImage}
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Song name</h4>
          <p>Artist name</p>
        </div>
      </div>
      <div className="footer__center__main">
        <div className="footer__center">
          <div className="footer__icons">
            <ShuffleIcon className="footer__green" />
            <SkipPreviousIcon className="footer__icon" />
            <PlayCircleOutlineIcon
              id="play__circle"
              className="footer__icon"
              fontSize="large"
              //onClick={togglePlaying(playing, dispatch)}
            />
            <SkipNextIcon className="footer__icon" />
            <RepeatIcon className="footer__green" />
          </div>

          <div className="slider">
            <p>0:00</p>
            <Grid item xs>
              <Slider />
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
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function togglePlaying(playing, dispatch) {
  var play_circle = document.getElementById("play__circle");
  if (playing) {
    dispatch({
      type: "TOGGLE_PLAYING",
      playing: false,
    });
    play_circle = (
      <PauseCircleOutlineIcon
        id="play__circle"
        className="footer__icon"
        fontSize="large"
      />
    );
  } else {
    dispatch({
      type: "TOGGLE_PLAYING",
      playing: true,
    });
    play_circle = (
      <PlayCircleOutlineIcon
        id="play__circle"
        className="footer__icon"
        fontSize="large"
      />
    );
  }
}

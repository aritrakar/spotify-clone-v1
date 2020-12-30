export const initialState = {
  user: null,
  devices: null,
  playlists: [],
  playing: false,
  item: null,
  shuffle: false,
  repeat: false,
  discover_weekly: null,
  top_artists: null,
  token: null,
  //"BQBbBdPGDPtwJqyM4rkRZHtwGiuCRQBCNKEJEHw5hjwUKwvlC4qiBVE4eHyGMbn_5PKyctXpKUVjevc6oEaUCgi47ts_HFMXwSbxXnZxZZfk5mvfhgRAl40dOZpMtrYyS_W-8lndmri_uufl2dINNocR7tmP_pglMEM",
  //"BQAZVy22AmES755oGu50C_s_MI7GkkgEe06krQjVgni64dkmACjeBeyG2wgihc68zV46pnpScsUhG_DEoNm_JhxSB2A-V12jCas5QJoKfsW0MK0w5_IspNVnYZ5iEt0FfWQD_A5fEeUtZMk0D7z0aulpfmdpPWjQ4UyY70FbaAYlLXC5CXy-LfzPvvOkkk2eKP6bvqOQFS62pZPsr4vVPNbYXvVTk5apGKcxBf2dD__YbObzcDLOcEsMxMuQ7CUnaFrGG22VGxWXxpkTUfT1",
  //"BQB5SaOhdMdOyEfsm5T4qPHsOSplEHdr43QKuSBkuJQHuwqlA1SWV9Y7eKbd1KF8VAgt2_YFTZ6NtuUrwRSCAP7TIG3H5QGcwjTiK_tTWOAmGqAUwmCCAd_niaHa6V1zb1L9uDA3VlV0JtZOBkDnG151tDUwfDv5RuJECmv4UkbaRqqlSHfMZt8EiZfBvKUAEPbELq6GqS6Kbxbys9vifTMFwP6cTS2gHa8WWkRyXWJIdm7WlH9dBES32O-4WlrYaBUVMZiMZ-JTgE3hv_vhM79eyA"
};

const reducer = (state, action) => {
  //console.log("ACTION", action);

  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };

    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLISTS":
      return { ...state, playlists: action.playlists };

    case "TOGGLE_PLAYING":
      return { ...state, playing: action.playing };

    case "SET_DISCOVER_WEEKLY":
      console.log("SET_DISCOVER_WEEKLY", action.discover_weekly);
      return { ...state, discover_weekly: action.discover_weekly };

    case "SET_TOP_ARTISTS":
      return { ...state, top_artists: action.top_artists };

    case "SET_SHUFFLE":
      return { ...state, shuffle: action.shuffle };

    case "SET_REPEAT":
      return { ...state, repeat: action.repeat };

    case "SET_ITEM":
      return { ...state, item: action.item };

    case "SET_DEVICES":
      return { ...state, devices: action.devices };

    default:
      return state;
  }
};

export default reducer;

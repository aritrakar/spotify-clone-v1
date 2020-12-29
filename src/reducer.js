export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  albumImage: null,
  discover_weekly: null,
  token: null,
  //"BQBbBdPGDPtwJqyM4rkRZHtwGiuCRQBCNKEJEHw5hjwUKwvlC4qiBVE4eHyGMbn_5PKyctXpKUVjevc6oEaUCgi47ts_HFMXwSbxXnZxZZfk5mvfhgRAl40dOZpMtrYyS_W-8lndmri_uufl2dINNocR7tmP_pglMEM",
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
      return { ...state, discover_weekly: action.discover_weekly };

    default:
      return state;
  }
};

export default reducer;

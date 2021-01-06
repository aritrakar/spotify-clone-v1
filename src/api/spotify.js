export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientID = "ccb1c4545811416896f8ece7c3724b00";
const clientSecret = "c7ff86c362e64d04ab052f95756f54f3";
const scopes = [
  "user-library-read",
  "user-library-modify",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
  /*"user-read-private",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-private",*/
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

const getCodeFromUrl = () => {
  return window.location.href.split("=")[1];
};

export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

console.log("LOGIN URL: ", loginUrl);

/*
export const loginUrl = `${authEndpoint}?client_id=${clientID}&response_type=code&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&show_dialog=true`;
*/

const ACCESS_CODE = getCodeFromUrl();
//console.log("ACCESS_CODE: ", ACCESS_CODE);

const loginUrl2 = `https://accounts.spotify.com/api/token/client_id=${clientID}&client_secret=${clientSecret}&grant_type=authorization_code&code=${ACCESS_CODE}&redirect_uri=${redirectUri}`;

const POST_OBJECT_HEAD = {
  Authorization: `Basic *<${clientID}:${clientSecret}>*`,
};

const POST_OBJECT_BODY = {
  grant_type: "authorization_code",
  code: ACCESS_CODE,
  redirect_uri: redirectUri,
  client_id: clientID.toString("base64"),
  client_secret: clientSecret.toString("base64"),
};

//console.log("POST_OBJECT_BODY: ", JSON.stringify(POST_OBJECT_BODY));

/*
fetch("https://accounts.spotify.com/api/token", {
  mode: "no-cors",
  method: "POST",
  body: JSON.stringify(POST_OBJECT_BODY),
}).then((response) => {
  console.log("Response: ", response);
});
*/

/*
fetch(loginUrl2, {
  mode: "no-cors",
  method: "POST",
  body: JSON.stringify(POST_OBJECT_BODY),
}).then((response) => {
  console.log("Response: ", response);
});
*/

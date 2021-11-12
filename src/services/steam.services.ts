const SteamAuth = require("node-steam-openid");
 
const steam = new SteamAuth({
  realm: process.env.REACT_APP_HOST, // Site name displayed to users on logon
  returnUrl: `${process.env.REACT_APP_HOST}/auth/steam/authenticate`, // Your return route
  apiKey: process.env.REACT_APP_STEAM_API_KEY // Steam API key
});

export default steam;
const request = require("request-promise");
const API_URL = "https://api.spotify.com/v1";

module.exports = (route, { token, ...params }) => 
   request(API_URL + route, {
        headers: {
          Authorization: "Bearer " + token
        },
        json: true,
        ...params
      }).catch(e => console.warn(e));

const request = require("./spotifyRequest");
const API = "/me/top/tracks";

module.exports = async (token, time_range) => {
  const { items } = await request(API, {
    token,
    qs: {
      time_range,
      limit: 50
    }
  });
  return items.map(({ id, uri, name, artists, popularity }) => ({
    id,
    name,
    artists: artists.map(a => a.name),
    popularity,
    uri
  }));
};

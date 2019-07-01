const request = require("./spotifyRequest");
const API = "/me";

module.exports = async (token) => {
  const { display_name, href, id, images } = await request(API, {
    token
  });
  return {
      name: display_name,
      username: id,
      spotifyHref: href,
      image: images.length ? images[0].url : null
  }
};

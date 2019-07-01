const request = require("./spotifyRequest");
const API = "/audio-features";

module.exports = async (token, ids = []) => {
  const { audio_features } = await request(API, {
    token,
    qs: {
      ids: ids.join(",")
    }
  });
  return audio_features.map(
    ({ id, danceability, energy, key, loudness, mode, speechiness, acousticness, instrumentalness, liveness,valence, tempo, }) => ({
      id,
      danceability,
      energy,
      key,
      loudness,
      mode,
      speechiness,
      acousticness,
      instrumentalness,
      liveness,
      valence,
      tempo
    })
  );
};

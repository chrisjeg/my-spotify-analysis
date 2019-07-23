const getTopTracks = require("./getTopTracks");
const getAudioFeatures = require("./getAudioFeatures");

module.exports = async function getTracksForTerm(term, token) {
  const formattedTerm = term + "_term";

  const tracks = await getTopTracks(token, formattedTerm);
  const ids = tracks.map(t => t.id);

  const features = await getAudioFeatures(token, ids);
  tracks.forEach((track, i) => Object.assign(track, features[i]));
  return tracks;
};

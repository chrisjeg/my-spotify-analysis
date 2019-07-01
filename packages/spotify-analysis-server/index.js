const express = require("express");
const middleware = require("./middleware");
const asyncHandler = require("express-async-handler");
const getTopTracks = require("./requests/getTopTracks");
const getAudioFeatures = require("./requests/getAudioFeatures");

const config = require("../../../config/spotify-analysis-api.json");

const PORT = config.port;
const app = express();
middleware.filter(router => router).forEach(router => app.use(router));

app.get("/api/profile", (req, res) =>
  res.json({
    authenticated: req.user && req.isAuthenticated()
  })
);

app.get(
  "/api/tracks",
  asyncHandler(async (req, res) => {
    const { term = "short_term" } = req.query;
    if (!req.user || !req.isAuthenticated()) {
      res.redirect("/auth/spotify");
      return;
    }
    const tracks = await getTopTracks(req.user.token, term);
    const ids = tracks.map(t => t.id);
    const features = await getAudioFeatures(req.user.token, ids);
    tracks.map((track, i) => Object.assign(track, features[i]));
    res.json(tracks);
  })
);

app.listen(PORT, () => console.log(`App is live on ${PORT}`));

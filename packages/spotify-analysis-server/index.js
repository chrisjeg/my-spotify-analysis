const express = require("express");
const middleware = require("./middleware");
const asyncHandler = require("express-async-handler");
const getMyDetails = require("./requests/getMyDetails");
const getTracksForTerm = require("./requests/getTracksForTerm");

const CONFIG = require("../../../config/spotify-analysis-api.json");
const PORT = CONFIG.port;
const TERMS = ["short","medium","long"];

const testProfile = require("./test/profile.json");
const testTracks = require("./test/tracks.json");

const app = express();
middleware.filter(router => router).forEach(router => app.use(router));

app.get("/api/profile", (req, res) => {
  return testProfile;
  if (req.user && req.isAuthenticated()) {
    getMyDetails(req.user.token).then(userDetails =>
      res.json({
        authenticated: true,
        ...userDetails
      })
    );
  } else {
    res.json({
      authenticated: false
    });
  }
});

app.get(
  "/api/tracks",
  asyncHandler(async (req, res) => {
    return testTracks;
    if (!req.user || !req.isAuthenticated()) {
      res.redirect("/auth/spotify");
      return;
    }
    const [
      shortTerm,
      mediumTerm,
      longTerm
    ] = await Promise.all(TERMS.map(term => getTracksForTerm(term,req.user.token)));
    res.json({
      shortTerm,
      mediumTerm,
      longTerm
    });
  })
);

app.listen(PORT, () => console.log(`App is live on ${PORT}`));

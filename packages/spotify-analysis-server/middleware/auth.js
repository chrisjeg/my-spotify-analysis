const express = require("express");
const router = express.Router();
const passport = require("passport");
const { Strategy } = require("passport-spotify");
const userbase = require("node-persist");

const CONFIG = require("../../../../config/spotify-analysis-api");

userbase.init({ dir: "../../../../persist/spotify-analysis-data" });

router.use(passport.initialize());
router.use(passport.session());
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) =>
  done(null, await userbase.getItem(id))
);

passport.use(
  "spotify",
  new Strategy(
    { ...CONFIG, scope: ["user-top-read"] },
    async (
      accessToken,
      refreshToken,
      { id, photos, profileUrl, displayName },
      done
    ) => {
      const user = {
        id,
        token: accessToken,
        photo: photos && photos[0],
        profileUrl,
        displayName
      };
      await userbase.setItem(id, user);
      return done(null, await userbase.getItem(id));
    }
  )
);

router.get("/auth/spotify", passport.authenticate("spotify")).get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", {
    successRedirect:
      process.env.NODE_ENV === "production"
        ? "/my-spotify"
        : "http://localhost:3000/",
    failureRedirect: "/"
  })
);

module.exports = router;

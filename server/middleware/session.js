const session = require("express-session");
const FileStore = require('session-file-store')(session);

module.exports = session({
  secret:
    process.env.SESSION_SECRET || require("../../../config/spotify-analysis-api").sessionSecret,
  store: new FileStore({
    path: "../persist/spotify-analysis-session"
  })
});

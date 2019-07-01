const proxy = require("http-proxy-middleware");

const PROXIED_ROUTES = ["/api", "/auth"];
const TARGET = "http://localhost:3005/";

module.exports = function(app) {
  PROXIED_ROUTES.forEach(route => app.use(proxy(route, { target: TARGET })));
};

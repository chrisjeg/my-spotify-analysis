module.exports = [
    require("./session"),
    require("./auth"),
    require("helmet")(),
    process.env.NODE_ENV === "production" && require("cors")()
]
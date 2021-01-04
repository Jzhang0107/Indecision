// define entry point - app.js in src
// define output - app.js in public/scripts

const path = require("path");

console.log(path.join(__dirname, "public"));

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    }
};
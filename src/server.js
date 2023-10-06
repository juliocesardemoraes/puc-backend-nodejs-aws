const app = require(".");
const port = 3000;

app.listen(port, function () {
  console.log("Example app listening on port " + port + "!");
});

module.exports = app;

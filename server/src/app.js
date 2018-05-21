const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const { sequelize } = require("./models");
const config = require("./config/config");

// morgan used to log what device hit us in the console, example:
// ::1 - - [30/Apr/2018:19:44:21 +0000] "GET /status HTTP/1.1" 304 - "-"
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36
// (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require("./routes")(app);

sequelize.sync().then(() => {
  app.listen(config.port);
  console.log(`app listening on port no. ${config.port}`);
});

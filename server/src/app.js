const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// morgan used to log what device hit us in the console
// ::1 - - [30/Apr/2018:19:44:21 +0000] "GET /status HTTP/1.1" 304 - "-"
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36
// (KHTML, like Gecko) Chrome/66.0.3359.117 Safari/537.36"
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status", (req, res) => {
  res.send({
    message: "hello world!"
  });
});

app.listen(process.env.PORT || 8081);

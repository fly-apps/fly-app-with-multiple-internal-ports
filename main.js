const express = require("express");
const firstApp = express();
const secondApp = express();
const firstAppPort = process.env.FIRST_APP_PORT || 8080;
const secondAppPort = process.env.SECOND_APP_PORT || 9090;

firstApp.get("/", (req, res) => {
  res.send("<h1>Hello From the first app!</h1>");
});
secondApp.get("/", (req, res) => {
  res.send("<h1>Hello From the second app!</h1>");
});

firstApp.listen(firstAppPort, () => console.log(`first app listening on port ${firstAppPort}!`));
secondApp.listen(secondAppPort, () => console.log(`second app listening on port ${secondAppPort}!`));

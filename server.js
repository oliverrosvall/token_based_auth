const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // init

// listen for requests to login uri
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);

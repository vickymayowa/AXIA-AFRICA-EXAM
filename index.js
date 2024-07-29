const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// a. Get request
app.get("/", (req, res) => {
  res.send("This is a response from the GET request.");
});

// b. Post request
app.post("/", (req, res) => {
  res.json(req.body);
});

// c. Update request
app.put("/", (req, res) => {
  res.send("Update successful");
});

// d. Delete request
app.delete("/", (req, res) => {
  res.send("This is a response from the DELETE request.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
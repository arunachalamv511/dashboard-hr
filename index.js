const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, "build")));

// For any route that doesn’t match a static file, send the React app’s index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/api/ping", (req, res) => {
 return res.status(200).send("success");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

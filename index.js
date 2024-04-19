const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3003);
app.get("/", (req, res) => {
  res.end("Hello world");
});
app.get("/test", (req, res) => {
  res.end("<html><head><title>Test</title></head></html>");
});

app.listen(app.get("port"), () => {
  console.log("express server running on port 3003");
});

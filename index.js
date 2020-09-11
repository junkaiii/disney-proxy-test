const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();
const port = 3000;

const API_SERVICE_URL = "https://jsonplaceholder.typicode.com";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(
  "/json_placeholder",
  createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      [`^/json_placeholder`]: "",
    },
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

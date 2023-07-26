const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile("/static/index.html", {
    root: __dirname,
  });
});
app.get("/products", function (req, res) {
  res.send("Products List");
});
app.post("/products", function (req, res) {
    res.send("Building product");
});
app.put("/products", function (req, res) {
    res.send("Updating a product");
});
app.patch("/products", function (req, res) {
    res.send("Updating part of a product");
});
app.delete("/products", function (req, res) {
    res.send("Deleting a product");
});
app.use((req, res) => {
  res.status(404).send("Not Found T.T");
});
app.listen(3000);
const express = require("express");
const port = process.env.PORT || "3000";
const app = express();
const bodyParser = require("body-parser");
require("./db");
require("./models/User");
const authRoutes = require("./routes/authRoutes");
const requiredToken = require("./middlewares/AuthTokenRequired");

app.use(bodyParser.json());
app.use(authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to used2.com");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const express = require("express");
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require("body-parser");
require("./db");
require("./models/User");
const authRoutes = require("./routes/authRoutes");
const requiredToken = require("./middlewares/AuthTokenRequired");

app.use(bodyParser.json());
app.use("/user", authRoutes);

app.get("/", requiredToken, (req, res) => {
    res.send(req.user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
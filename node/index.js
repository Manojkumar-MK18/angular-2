const express = require("express");
const app = express();
const bodyp = require("body-parser");
const router = require("./route");

app.use(bodyp.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));
app.use("/", router);

app.listen(4000, () => {
    console.log(`Node File Pointed in Port 4000`);
});
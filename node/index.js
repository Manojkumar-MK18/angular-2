const express = require("express");
const app = express();
const bodyp = require("body-parser");
const connectmongoose = require("mongoose");
const router = require("./route");
var path = require("path");

app.use(bodyp.urlencoded({ extended: true }));
app.use(express.json({ limit: "100mb" }));
app.use("/", router);

app.use(express.static(path.join(__dirname, "/asserts")));

connectmongoose
    .connect("mongodb://127.0.0.1:27017/shopping", {})
    .then(() => {
        console.log("db connected succesfully");
        app.listen(4000, () => {
            console.log(`Node File Pointed in Port 4000`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to db:", error);
    });
const express = require("express");
const app = express();

// Without middleware
app.get("/", (req, res) => {
    res.send({ title: "GeeksforGeeks" });
});

app.listen(4000, () => {
    console.log(`Node File Pointed in Port 4000`);
});
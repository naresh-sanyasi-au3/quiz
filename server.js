const express = require("express");
const app = express();


const port = process.env.PORT || 8000;

if (process.env.NODE_ENV === "production") {
    app.use(express.static('build'));
    const path = require('path');
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
};
app.listen(port, () => {
    console.log("server is running");
});

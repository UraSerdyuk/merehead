const {PORT = 9988} = process.env;
const express = require('express');
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, 'build')));
app.use("/", (req, res) => {
    res.sendFile('./build/index.html');
})

app.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});

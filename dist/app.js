import express from "express";
var server = express();
var PORT = process.env.PORT;
server.use(express.json());
server.get('/status', function (req, res) {
    return res.send('Working...');
});
server.listen(PORT || 4001, function () {
    console.log("Listen on port ".concat(PORT));
});

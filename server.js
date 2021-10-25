require('dotenv').config();
const express = require('express');
var app = express();
const cors = require('cors');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Data = mongoose.model('Data', dataSchema);

app.get("/", (req, res) => {
    res.send("Welcome to the Node server side application");
});

var listener = app.listen(port, function () {
    console.log('Your app is listening on port ' + port);
});
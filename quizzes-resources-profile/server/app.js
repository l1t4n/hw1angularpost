const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const { quizzesRouter } = require('./routes/quizzes.router');
const { resourceRouter } = require('./routes/resources.router');
const { authRouter } = require('./routes/auth.router');

const app = express();

app.use(cors());
app.use(bodyParser.json());

connect();

app.use("", quizzesRouter);
app.use("", resourceRouter);
app.use("", authRouter);
app.use("/", (req, res) => {
    return res.json({
        msg: "Initial page"
    })
});


async function connect() {
    try {
        await mongoose.connect("mongodb+srv://maxivan200206:02luLP7YdUPtu1VO@cluster0.uxlklna.mongodb.net/ferr");
    }catch(e) {
        console.log('[e.message]', e.message);
    }
}

module.exports = {
    app
}

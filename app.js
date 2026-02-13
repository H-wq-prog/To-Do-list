require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const todoRoutes = require('./routes/todoRoutes');
const app = express();
app.use(express.json());
const post = process.env.POST || 3000;


async function dbconnection() {
    try {
        const url = process.env.URL;
        await mongoose.connect(url);
        console.log("Dp is connect")
    }
    catch (error) {
        console.log(error)
    }
}

dbconnection();








app.use('/api/tasks', todoRoutes);

app.listen(post, () => {
    console.log(`the server work as ${post}`)
})
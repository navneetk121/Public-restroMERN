
const express = require("express");
const cors=require("cors");
const mongoose= require("mongoose");
const app= express();


require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// router
const restro=require("./routes/restro")
app.use("/api/v1",restro);

const connectwithDb = require("./config/database");
connectwithDb();

app.listen(PORT, () => {
    console.log(`App started at port no ${PORT}`);
});


app.get("/", (req,res) => {
    res.send(`<h1>This is the Homepage!!</h1>`)
    console.log("working");
});
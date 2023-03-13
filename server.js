const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const app = express();
app.use(express.json());
const port = 8000;
const url = "mongodb+srv://AddToCart:hmL0pPkrrjs9MQo4@cluster0.e8mzuh8.mongodb.net/ATCDatabase?retryWrites=true&w=majority"
mongoose.connect(url);
const db = mongoose.connection;
db.on("error",(error)=>{
    console.log(error);
});

db.once("open",()=>{
    console.log("sucessfully connected");
});


app.use("/v1", router)

app.listen(port , ()=>{
    console.log(`i am listing from port http://localhost:${port}`);
})
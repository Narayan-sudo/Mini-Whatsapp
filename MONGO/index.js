const express = require("express");
const app = express();
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("views engine","ejs");

const mongoose = require("mongoose");


main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

//Index Route
app.get("/chats", async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
    // res.send(chats);
})



app.get("/",(req,res)=>{
    res.send("route is working");
});


app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});
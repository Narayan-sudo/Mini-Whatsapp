const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let chats=[{
    
    from:"ayush",
    to:"narayan",
    msg:"send me your exam sheets",
    created_at: new Date()
    },
    {
        from:"sdfg",
        to:"alkf",
        msg:"akdfhsdhafoig",
        created_at: new Date(),

    },
    {
        from:"ghsdgh",
        to:"ewrio",
        msg:"gherlsdifo",
        created_at: new Date(),

    }

];

Chat.insertMany(chats);


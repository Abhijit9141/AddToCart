const dotenv = require("dotenv");
const app = require("./app");
const mongoose =  require("mongoose");
const port = process.env.PORT || 5000;

dotenv.config({path: "./config.env"});

process.on("uncaughtException",err=>{
    console.log("uncaught exception occured");
    console.log(err.name , err.message);
    process.exit(1);
});

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
}).then(()=> console.log("database connected successfully")
)

app.listen(port,()=>{
    console.log(`server listening on port http://localhost:${port}`);
});

process.on('unhandledRejection', err => {
    console.log('unhandled rejection! shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
const express = require("express");

const mongoose = require("mongoose");

const app = express();

const dotenv = require("dotenv");

dotenv.config();

const bodyParser = require("body-parser")

const router = require("./routes/user.route")

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 
}).then(()=>{
    console.log("Database is connected")
}).catch(()=>{
    console.log("Error while connecting the database")
})

app.use("/api/v1/user",router)

app.listen(process.env.PORT,()=>{
    console.log(`Server get started at port ${process.env.PORT}`);
})

// 8080/api/v1/user/signUp
const userModel = require("../models/user.model")

const jwt = require("jsonwebtoken")

const handleUserSingUp = (req,res)=>{
     userModel.create(req.body).then((response)=>{
      res.status(201).send({message:"User Created successfully"},
      )
     }).catch((err)=>{
        res.status(404).send({message:"Something went wrong singnup!"})
     })
}


const handleUserSignIn = (req,res)=>{
    const {email} = req.body;
    userModel.find({email:email}).then((response)=>{
        console.log(email)
        if(response.length >=1){
           const token = jwt.sign(email,process.env.SECRECT_KEY);
            res.status(200).send({
                message:"Login Successfully",
                "token":token})
        }
    }).catch((err)=>{
        res.status(404).send({message:"Error while user SignIn"})
    })
}


const handleUserDetails = (req,res)=>{
    const email = req.email;
    console.log(email)
}

module.exports = {handleUserSingUp,handleUserSignIn,handleUserDetails}













const jwt = require("jsonwebtoken");

const verify = (req,res,next)=>{
    const token = req.headers.auth_key;
    console.log(token)
    const verifiedToken = jwt.verify(token,process.env.SECRECT_KEY)
    try{
    if(verifiedToken){
        console.log(verifiedToken)
        req.email = verifiedToken;
        res.status(200).send("successfully verified")
    }else{
        res.status(500).send("err")
    }
}catch(err){
    res.status(500).send("err") 

}
next()
}

module.exports = {verify}

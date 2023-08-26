const path = require('path');
const Signup = require('../models/signup');

module.exports.getSignupController = async (req, res) => {
    Signup.findAll();
    try{
        res.sendFile(path.join(__dirname, '/..', '/views', '/signup.html'))
    }catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
    }
    
};


module.exports.postSignupController = async (req, res) => {
    console.log(req.body);
    const signup={
        id:req.body.id,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
      }
      Signup.create(signup)
      try{
        res.sendFile(path.join(__dirname, '/..', '/views', '/signup.html'))
      }catch(err){
        console.log(err);
        res.status(500).send('Internal server error');
      }
};
const path = require("path");
const Signup = require("../models/signup");

module.exports.getSignupController = async (req, res) => {
  Signup.findAll();
  try {
    res.sendFile(path.join(__dirname, "/..", "/views", "/signup.html"));
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};

module.exports.postSignupController = async (req, res) => {
  console.log(req.body);
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const signup = {
    name: name,
    email: email,
    password: password,
  };
  try {
    const check = await Signup.findOne({ where: { email: email } });
    if (check) {
      res.send('<h1 style="color:red;">User Already Exists!!!</h1>');
    } else {
      Signup.create(signup);
      res.sendFile(path.join(__dirname, "/..", "/views", "/signup.html"));
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
};


module.exports.postLoginController = async (req, res) => {
    try{
        res.sendFile(path.join(__dirname, "/..", "/views", "/login.html"));
    }catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
}
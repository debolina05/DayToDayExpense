const path = require("path");
const Login = require("../models/login");
const Signup = require("../models/signup");
const { where } = require("sequelize");

module.exports.getLoginController = async (req, res) => {
    Login.findAll();
    try {
      res.sendFile(path.join(__dirname, "/..", "/views", "/login.html"));
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
};

module.exports.postLoginController = async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const login = {
      email: email,
      password: password,
    };
    try {
      const check = await Signup.findOne({where: {email:email}});
      if (check) {
        Login.create(login);
        res.sendFile(path.join(__dirname, "/..", "/views", "/daily.html"));
      }
      else{
        res.send('<h1 style="color:red;">Wrong Credentials!!!</h1>');
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal server error");
    }
  };


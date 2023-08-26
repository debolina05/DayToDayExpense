const express=require('express');
const bodyParser=require('body-parser')

const signup=require('./routes/signup')
const login = require('./routes/login')
const sequelize = require('./database/config');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',login)
app.use('/',signup)


app.listen(3000,()=>console.log('listening on port 3000'));
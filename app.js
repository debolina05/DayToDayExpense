const express=require('express');
const bodyParser=require('body-parser')

const signup=require('./routes/signup')
const sequelize = require('./database/signup');

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use('/' ,signup)

app.listen(3000,()=>console.log('listening on port 3000'));
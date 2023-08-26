const sequelize = require('../database/signup');
const {DataTypes} = require('sequelize');

const Signup=sequelize.define('daytodayexpense',
{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{tableName:'signup', timestamps:false});

module.exports=Signup;
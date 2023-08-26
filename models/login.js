const sequelize = require('../database/config');
const {DataTypes} = require('sequelize');

const Login=sequelize.define('daytodayexpense',
{
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
},{tableName:'login', timestamps:false});

module.exports=Login;
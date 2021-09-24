const { response } = require('express');
const User = require('../database/models/User');

module.exports ={
    async index (req, res){
        const user = await User.findAll();
    
        return res.json(user);
    },
async store (req, res){
    const {full_name , email, phone, cpf, date_of_birth, password } = req.body;
    const user = await User.create({full_name, email, phone, cpf, date_of_birth, password});

    return res.json(user);
},
async login (req, res){
    const {email, password } = req.body;
    const user = await User.findOne({where: { email, password }} );
    console.log(user)
    if(user === null){
        return res.send(JSON.stringify('error'))
    }else{
        return res.send(user)
    }
} 
};
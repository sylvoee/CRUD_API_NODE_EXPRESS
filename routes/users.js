const express = require('express')
const router = express.Router();
const users = require('../userData');

//Setting up the user route 
router.get('/users' , (req, res)=>{
res.send(users);
});

// post methods has been refactored 
const createUser = require('./controllers/usersMethods');
router.post('/', createUser);

// read a user profile
router.get('/:id', (req, res)=>{
   const foundUser = users.find((user)=>user.id == req.params.id);
   // foundUser = users.filter(user => user.id != req.params.id);
   res.send(foundUser);
   console.log(foundUser);
});

// delete user
router.delete('/:id', (req, res)=>{
   const deleteUser = users.filter((user)=>user.id != req.params.id);
   res.send(deleteUser);
});

// edit user
router.patch('/:id', (req, res)=>{
   const{id , name, surname, age} = req.body;
   const editUser = users.find((user)=>user.id == req.params.id);
   if(name){editUser.name = name;}
   if(surname){editUser.surname = surname;}
   if(age){editUser.age = age;}
   res.send(`User with id ${editUser.id} has been updated`);

});

module.exports = router;
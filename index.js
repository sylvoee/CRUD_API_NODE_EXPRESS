const express = require('express')
const app = express();
// importing the router file
const usersRoutes = require('./routes/users');



const bodyPaser = require('body-parser');

// using middleware
app.use(bodyPaser.json());
// All route begins with /users
app.use('/', usersRoutes);

// making a simulation of the database



// Setting the routers
app.get('/', (req, res)=>{
   res.send("Welcome HOME!!!");
   console.log()
});

const PORT = 1000
app.listen(PORT, ()=>{console.log("App is listen at port " + PORT)});
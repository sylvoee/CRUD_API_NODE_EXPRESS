const createUser = (req, res)=>{
    console.log("POST ROUTE REACHED");
    res.send("POST ROUTE FRO CLIENT");
    //  console.log(req.body);
    
     users.push(req.body);
     
   res.send(`A user with surnmame ${req.body.surname} has been added ok`);
   
 }
module.exports = createUser; 
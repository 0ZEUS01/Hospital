const express=require("express");
const cors=require("cors"); 

const { usersList } = require("./params/users");








const app=express();
app.use(express.json()) 

app.use(express.urlencoded(true)) 
 app.use(cors({origin: "http://localhost:3000"}))

 


 

app.get("/users", async function(request, response){
     
    let users= await db.User.findAll({
        order:[ ['id', 'DESC']],
    });

    return response.json(users)

    
 })


 
 app.post("/login", function(request, response){
     
    let email=request.body.email;
    let password=request.body.password; 
 
    let users=usersList(); 

    
    let user= users.find(x=>x.email===email && x.password===password) 

    if(user){
        let token=generateAccessToken({email: user.email})
        return response.json({status: 'success',token: token})
    }
    else{
        return response.status(404).json({status: "failed", error: "user not found"})
    }  
 }) 

app.listen(8000,function(){
console.log("the server is listening to port 8000")
})
 

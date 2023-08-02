const express=require("express")
const app=express()
app.use(express.json())
const fs=require("fs")
app.get("/",(req,res)=>{
    res.send("welcome to home page")
})
app.get("/search",(req,res)=>{
    const {movie}=req.query
    if(movie){
        res.send(`this is movie regarding ${movie}`)
    }else{
        res.send("please place the movie to search")
    }
})
app.get("/temp",(req,res)=>{
    const {city}=req.query
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    console.log(data.cities[city])
    const temperature=data.cities[city]
    res.send(`this is ${temperature} regarding ${city} in celcius`)
})
app.listen(8080,()=>{
    console.log("port is running")
})
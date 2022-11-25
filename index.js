const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const port=2003;
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("This is postaction")
})
app.get("/users",(req,res)=>{
	res.send("hello")
})
app.get("/stu",(req,res)=>{
	res.send("everyone")
})
app.post("/newData",(req,res)=>{
	//console.log(req.body)
	const {name,age,course,mobile,email,year,gender}=req.body
	console.log(name,age,course,mobile,email,year,gender)
	res.send("Data Added")
})
app.listen(port,()=>console.log("Server starts at port 2003"))
/*const express=require("exprees")
const app=express()
const port=2003
const bodyParser=require("body-parser")*/
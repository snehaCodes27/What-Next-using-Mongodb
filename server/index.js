const express = require("express");
const cors = require("cors");
const{MongoClient}=require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
	const url = process.env.MONGODB_URL;
	const con = new MongoClient(url);
	const db = con.db("wn25june25");
	const coll = db.collection("student");
	const doc ={"name":req.body.name,"choice":req.body.choice};
	coll.insertOne(doc)
	.then(response=>{
		res.send(response);
	})
	.catch(error=>{
		console.log("issue"+error);
	});

});

app.listen(9000,()=>{console.log("server is ready to serve @9000");});
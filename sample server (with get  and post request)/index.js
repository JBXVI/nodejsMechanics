const express = require("express")
const parser = require("body-parser");
const app = express()
const PORT = process.env.PORT || 80;
app.use(parser.json())


app.get('/',(req,res)=>{
    res.json({"status":"running......."})
})

app.post('/',(req,res)=>{
        let message = req.body.message
        res.json({"message":message})
})

app.listen(80,()=>console.log(`Started Server at  port :${PORT}`))

import express, { json } from "express"
import { userroute } from "./src/routes/userroute.js"
import path, { dirname } from "path"
import { fileURLToPath } from "url"
import { url } from "inspector"

const app = express()
// middeleware
// dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname= dirname(__filename)
// userroute
app.use(express.json())
app.use(`/api/users`,userroute)
app.use(express.static(path.join(__dirname,"public")))
// home page 
app.get(`/`,(req,res)=>{
    try {
        res.status(200).sendFile(path.join(__dirname,"public","homePage","homePage.html"))
    } catch (error) {
        res.status(400).json({message:`fail`,error:error?.message})
    }
})
// 404 page 
app.use((req,res,next)=>{
    try {
        res.sendFile(path.join(__dirname ,"public","404page","404.html"))
    } catch (error) {
        res.status(400).json({error:error?.message})
    }
})
//server start 
const port = 5000 
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})
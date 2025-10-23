import express from "express"
import { userroute } from "./src/routes/userroute.js"
const app = express()
// middeleware

// userroute
app.use(express.json())
app.use(`/api/users`,userroute)


//server start 
const port = 5000 
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})
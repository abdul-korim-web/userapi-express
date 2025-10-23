import express from "express"
import { userroute } from "./src/routes/userroute"
const app = express()
// middeleware

// userroute
app.use(`/users`,userroute)
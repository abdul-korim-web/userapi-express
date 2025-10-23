import express from "express"
import { allusershow } from "../controls/usercontrol.js"
const userroute = express.Router()

userroute.get(`/`,allusershow)

// export 
export {userroute}
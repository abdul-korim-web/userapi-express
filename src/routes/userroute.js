import express from "express"
import { addUser, allusershow } from "../controls/usercontrol.js"
const userroute = express.Router()
//show all user
userroute.get(`/`,allusershow)
// added user
userroute.post(`/adduser`,addUser)
// export 
export {userroute}
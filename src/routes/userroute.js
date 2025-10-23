import express from "express"
import { addUser, allusershow, showsingleuser } from "../controls/usercontrol.js"
const userroute = express.Router()
//show all user
userroute.get(`/`,allusershow)
// added user
userroute.post(`/adduser`,addUser)
//show single user (usering id)
userroute.get(`/:id`,showsingleuser)



// export 
export {userroute}
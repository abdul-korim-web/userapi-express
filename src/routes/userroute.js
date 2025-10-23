import express from "express"
import { addUser, allusershow, deleteusercontrol, showsingleuser } from "../controls/usercontrol.js"
const userroute = express.Router()
//show all user
userroute.get(`/`,allusershow)
// added user
userroute.post(`/adduser`,addUser)
//show single user (usering id)
userroute.get(`/:id`,showsingleuser)
// delete user (usering id)
userroute.delete(`/delete/:id`,deleteusercontrol)



// export 
export {userroute}
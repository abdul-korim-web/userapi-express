import express from "express"
import { addUser, allusershow, changeUserInfoControl, deleteusercontrol, showsingleuser } from "../controls/usercontrol.js"
const userroute = express.Router()
//show all user
userroute.get(`/`,allusershow)
// added user
userroute.post(`/adduser`,addUser)
//show single user (usering id)
userroute.get(`/:id`,showsingleuser)
// delete user (usering id)
userroute.delete(`/delete/:id`,deleteusercontrol)
// change target user info
userroute.put(`/change/:id`,changeUserInfoControl)


// export 
export {userroute}
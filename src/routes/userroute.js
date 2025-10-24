import express from "express";
import {
  addUser,
  allusershow,
  changeUserInfoControl,
  deleteusercontrol,
  showsingleuser,
} from "../controls/usercontrol.js";
import { body } from "express-validator";
const userroute = express.Router();
//show all user
userroute.get(`/`, allusershow);
// added user
userroute.post(
  `/adduser`,
  [
    body(`username`)
      .trim()
      .notEmpty()
      .isLength({ min: 3, max: 30} )
      .withMessage(`valid userName are required`),
    body(`email`).isEmail().withMessage(`valid email are required`),
    body(`password`)
      .trim()
      .isLength({ min: 6, max: 30 })
      .withMessage(`valid password are required`),
  ],
  addUser
);
//show single user (usering id)
userroute.get(`/:id`, showsingleuser);
// delete user (usering id)
userroute.delete(`/delete/:id`, deleteusercontrol);
// change target user info
userroute.put(`/change/:id`, changeUserInfoControl);

// export
export { userroute };

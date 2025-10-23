import {
  allusers,
  addNewUser,
  singleusermodel,
  deleteusermodel,
  changeUserInfoModel,
} from "../models/usermodel.js";

// show all user
const allusershow = (req, res) => {
  try {
    const showAllusers = allusers();
    res.status(200).json(showAllusers);
  } catch (error) {
    res.status(400).send(`all user not showing becouse ${error?.message}`);
  }
};

// added user
const addUser = (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email) {
      return res.status(400).send(`all filed are required`);
    } else {
      const newUser = { username, email, password };
      //user added function
      addNewUser(newUser);
      res.status(200).json({
        message: "user added success",
        userinfo: newUser,
      });
    }
  } catch (error) {
    res.status(400).send(`user add fail becouse ${error?.message}`);
  }
};
// showing single user useing id
const showsingleuser = (req, res) => {
  try {
    const userlist = singleusermodel();
    const id = Number(req.params.id);
    const targetuserIndex = userlist.findIndex((item) => item.id === id);
    if (targetuserIndex === -1) {
      return res.status(400).json({
        message: `user not found try again!`,
      });
    }
    res.status(200).json(userlist[targetuserIndex]);
  } catch (error) {}
};
// delete user (usering id)
const deleteusercontrol = (req, res) => {
  try {
    const id = Number(req.params.id);
    const users = deleteusermodel();
    const targetUserIndex = users.findIndex((item) => item.id === id);
    if (targetUserIndex === -1) {
      return res.status(400).json({
        message: `user not found try again`,
      });
    }

    res
      .status(200)
      .json({
        message: "user delete success",
        userinfo: users[targetUserIndex],
      });
    users.splice(targetUserIndex);
  } catch (error) {
    res.status(400).json({ message: "user not delete", error: error?.message });
  }
};
// change target user info
const changeUserInfoControl = (req, res) => {
  try {
    const data = req.body;
    const id = Number(req.params.id);
    const user = changeUserInfoModel();
    const targetUserIndex = user.findIndex((item) => item.id === id);
    // data not send 
    if (!data) {
      return res.status(400).json({message:"Please Enter The Valid Data"})
    }
    if (targetUserIndex === -1) {
     return res.status(400).json({ message: `user not found try again` });
    }
    user[targetUserIndex]={
      ...user[targetUserIndex],
      username:data?.username || user[targetUserIndex]?.username,
      email:data?.email || user[targetUserIndex]?.email,
      password:data?.password || user[targetUserIndex]?.password
    }
    res.status(200).json({
      message:`user info changed success`,
      newuserinfo:user[targetUserIndex]
    })
  } catch (error) {
    res.status(400).json({error:error?.message})
  }
};
// export
export {
  allusershow,
  addUser,
  showsingleuser,
  deleteusercontrol,
  changeUserInfoControl,
};

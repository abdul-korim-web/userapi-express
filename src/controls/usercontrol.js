import { allusers, addNewUser, singleusermodel } from "../models/usermodel.js";

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
    res.status(200).json(userlist[targetuserIndex])
  } catch (error) {}
};
// export
export { allusershow, addUser,showsingleuser };

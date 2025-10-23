import { allusers } from "../models/usermodel.js"

const allusershow= (req,res)=>{
    try {
        const showAllusers= allusers()
        res.status(200).json(showAllusers)
    } catch (error) {
        res.status(400).send(`all user not showing becouse ${error?.message}`)
    }
}

// export 
export {allusershow}
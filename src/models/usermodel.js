const user=[
]

// all user show 
const allusers= ()=>{
    try {
        return user
    } catch (error) {
        console.log(`error : ${error?.message}`);
    }
}
// added user 
const addNewUser=(newuserdata)=>{
    try {
        user.push({id:user.length+1,...newuserdata})
    } catch (error) {
        console.log(`Error : ${error?.message}`);
    }
}
// showing single user useing id
const singleusermodel = ()=>{
    try {
        return user
    } catch (error) {
        console.log(`Error : ${error?.message}`);
    }
}
// delete user (usering id)
const deleteusermodel = ()=>{
    try {
        return user
    } catch (error) {
        console.log(`error : ${error?.message}`);
    }
}
// change target user info
const changeUserInfoModel= ()=>{
    try {
       return user 
    } catch (error) {
        console.log(`Error ${error?.message}`);
    }
}
// export 
export {allusers,addNewUser,singleusermodel,deleteusermodel,changeUserInfoModel}
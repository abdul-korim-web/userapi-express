const user=[
    {
        id:1,
        name:'abdul korim',
        role:"front end developer"
    },
    {
        id:2,
        name:'a.korim',
        role:"learning back end development"
    },
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


// export 
export {allusers,addNewUser,singleusermodel}
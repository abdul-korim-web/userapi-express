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




// export 
export {allusers}

export function doRegister(name,email,phone,password){
//   console.log(data)
    // firebase.auth().createUserWithEmailAndPassword(email,password)
    return {
        type:"FETCH_REGISTER",
        name:name,
        email:email,
        phone: phone,
        password:password
    }
}


export function verifyUser(user,token){  
     
    return {
        type:"VERIFY_USER",
        data: user,
        token: token
    }
}

export function doLogin(email,password){
    return{
        type:"FETCH_LOGIN",
        email:email,
        password:password
    }
}



export function doLogout(){
    return{
        type:"FETCH_LOGOUT"
    }
}
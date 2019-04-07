
import Cookies from 'js-cookie';
import axios from 'axios';

export const userService ={
    login,
    logout,
    register
}

const config = {
    apiUrl:process.env.REACT_APP_API
}
function login(username,password) {
    return axios({
        method:'post',
        url:`${config.apiUrl}/auth/login`,
        data:{
            user:username,
            pass:password
        }
    })
        .then(handleLoginResponse)
        .then(user=>{
            Cookies.set('user',user,{expires:1});
            return true;
        })
        .catch(err=>{
            throw err;
        })
}

function register(username,password) {
    return axios({
        method:'post',
        url:`${config.apiUrl}/auth/register`,
        data:{
            user:username,
            pass:password
        }
    })
        .then(handleRegisterResponse)
        .then(success=>{
            return success;
        })
        .catch(err=>{
            throw err;
        })
}


function logout() {
    Cookies.remove('user')
}

function handleLoginResponse(res){
    if(res.status===200){
        if(res.data.id)return res.data.id;
    }
    else{
        throw 'Authentication Error.';
    }
}

function handleRegisterResponse(res){
    if(res.status===200){
        return true;
    }
    else{
        throw 'Register error'
    }
}
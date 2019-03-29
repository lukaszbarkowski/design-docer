
import Cookies from 'js-cookie';
import axios from 'axios';

export const userService ={
    login,
    logout,
    register
}

const config = {
    apiUrl:'http://localhost:5000'
}
function login(username,password) {
    const reqOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({'user':username,'pass':password}),
        credentials:'same-origin'
    }
    return fetch(`${config.apiUrl}/auth/login`,reqOptions)
        .then(handleResponse)
        .then(user=>{
                Cookies.set('user',user.id,{expires:1});
                return true;
            }
        )
        .catch(err=>{
            throw err;
        })
}

function register(username,password) {
    return axios({
        method:'post',
        url:`${config.apiUrl}/users/register`,
        data:{
            username:username,
            password:password
        }
    })
        .then(handleResponse)
        .then(user=>{
            Cookies.set('user',user.id,{expires:1});
            return true;
        })
        .catch(err=>{
            throw err;
        })
}


function logout() {
    Cookies.remove('user')
}

function handleResponse(res){
    if(res.status===200){
        let id = !!res.data;
        if(id)return res.data.id;
        return res.text().then(
            text=>{
                const data=JSON.parse(text);
                if(!res.ok){
                    Promise.reject(text)
                }
                return data;
            }
        )
    }
    else{
        throw 'Authentication Error.';
    }
}
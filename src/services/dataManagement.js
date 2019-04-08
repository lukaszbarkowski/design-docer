import axios from 'axios';

export const dataManagement ={
    removeTodo,
    getTodo,
    postTodo
}
const config = {
    apiUrl:process.env.REACT_APP_API
}

function postTodo(user,value){
  
    return axios({
        method:'post',
        url:`${config.apiUrl}/todo/add`,
        data:{
            value:value,
            user:user
        }
    })
}

function removeTodo(id,key){
    return axios({
        method:'post',
        url:`${config.apiUrl}/todo/delete`,
        data:{
            id:id,
            key:key
        }
    })
}

function getTodo(user){
    return axios({
        method:'post',
        url:`${config.apiUrl}/todo/`,
        data:{
            user:user
        }
    })
}


function handleResponse(res){
    if(res.status===200){
        res.text().then(
            data=>{
                data=JSON.parse(data);
                return data;
            }
        )
    }
    else{
        throw 'Cannot post data.';
    }
}
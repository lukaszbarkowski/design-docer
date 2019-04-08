import axios from 'axios';

export const dataManagement ={
    removeTodo,
    getTodo,
    postTodo
}
const config = {
    apiUrl:process.env.REACT_APP_API
}

function postTodo(id,value){
  
    return axios({
        method:'post',
        url:`${config.apiUrl}/todo/add`,
        data:{
            value:value
        }
    })
}

function removeTodo(id){
    return axios({
        method:'post',
        url:`${config.apiUrl}/todo/delete`,
        data:{
            id:id
        }
    })
}

function getTodo(){
    return axios({
        method:'get',
        url:`${config.apiUrl}/todo/`
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
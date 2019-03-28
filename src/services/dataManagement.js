import axios from 'axios';

export const dataManagement ={
    removeTodo,
    getTodo,
    postTodo
}
const config = {
    apiUrl:'http://localhost:5000'
}

function postTodo(id,value){
    const reqOptions = {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            userId:id,
            value:value,
            isDone:false
        })
    }
    return fetch(`${config.apiUrl}/todos`,reqOptions)     
}

function removeTodo(id){
    return axios({
        method:'post',
        url:`${config.apiUrl}/todos/remove`,
        data:{
            test:id
        }
    })
}

function getTodo(){
    return axios({
        method:'get',
        url:`${config.apiUrl}/todos`,
        withCredentials:true
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
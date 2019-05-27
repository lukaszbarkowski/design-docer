import axios from 'axios';

const config = {
    apiUrl:process.env.REACT_APP_API
}

async function getDocuments(userId){
    return await axios({
        method:'POST',
        url:`${config.apiUrl}/documents/${userId}`
    })
}

const addNewDocument = (data) =>{
    return axios({
        method:'POST',
        url:`${config.apiUrl}/documents/${data.userId}/add`,
        data:data
    })
}

const removeDocument = (id) => {
    return axios({
        method:'POST',
        url:`${config.apiUrl}/documents/${id}/delete`
    })
}

export const documentsService ={
    getDocuments,
    addNewDocument,
    removeDocument
}
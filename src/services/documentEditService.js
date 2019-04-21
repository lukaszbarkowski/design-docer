import axios from 'axios';

const config = {
    apiUrl:process.env.REACT_APP_API
}

const getDocumentDetails = (id) =>{
    return axios({
        method:'POST',
        url:`${config.apiUrl}/documentDetails/${id}`
    })
}


export const documentEditService ={
    getDocumentDetails
}
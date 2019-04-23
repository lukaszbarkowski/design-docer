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

const updateDocumentDetails = (id,data) => {
    return axios({
        method:'POST',
        url:`${config.apiUrl}/documentDetails/${id}/update`,
        data:{
            data:data
        }
    })
}


export const documentEditService ={
    getDocumentDetails,
    updateDocumentDetails
}
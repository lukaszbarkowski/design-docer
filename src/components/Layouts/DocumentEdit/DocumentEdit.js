import React,{useState,useEffect} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Todo from '../../Todo/Todo';
import Navbar from '../../Navbar/Navbar';
import Document from '../../Document/Document'
import { userService } from '../../../services/userService'
import { documentEditService } from '../../../services/documentEditService'
import { Link } from 'react-router-dom';
import './DocumentEdit.scss'


function DocumentEdit(props){
    const [documentData, setDocumentData] = useState({id:null,data:{}});
    useEffect(()=>{
        const getDocumentDetails = async () =>{                                    
            const documentsList = await documentEditService.getDocumentDetails(props.match.params.id); 
            const newState = {
                id:documentsList.data.documentID,
                data:JSON.parse(documentsList.data.data)
            }                        
            setDocumentData(newState);
        };
        getDocumentDetails()

    },[]);

    const saveDocumentData = async (data) =>{
        let newState = documentData;
        newState.data.sections=data;        
        await documentEditService.updateDocumentDetails(documentData.id,documentData.data);
        setDocumentData(newState);            
    }

    return(
        <Aux>
            <Navbar logout={userService.logout} />
            <Todo />
            <Document data={documentData.data} saveData={saveDocumentData}/>
            <Link to="/documents" className="goBack">Go back</Link>
        </Aux>
    )
}
 
export default DocumentEdit;
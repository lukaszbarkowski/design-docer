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
    const [documentData, setDocumentData] = useState({});
    useEffect(()=>{
        const getDocumentDetails = async () =>{            
            const documentsList = await documentEditService.getDocumentDetails(props.match.params.id);            
            setDocumentData(documentsList.data);
        };
        getDocumentDetails();
    },[])
    return(
        <Aux>
            <Navbar logout={userService.logout} />
            <Todo />
            <Document data={documentData} />
            <Link to="/documents" className="goBack">Go back</Link>
        </Aux>
    )
}
 
export default DocumentEdit;
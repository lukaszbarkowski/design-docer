import React,{useState,useEffect} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Todo from '../../Todo/Todo';
import Navbar from '../../Navbar/Navbar';
import Document from '../../Document/Document'
import { userService } from '../../../services/userService'
import { documentEditService } from '../../../services/documentEditService'
import { Link } from 'react-router-dom';
import './DocumentEdit.scss'
import _ from 'lodash'


function DocumentEdit(props){
    const [documentData, setDocumentData] = useState({id:null,title:'',data:{}});
    useEffect(()=>{
        const getDocumentDetails = async () =>{                                    
            const documentsList = await documentEditService.getDocumentDetails(props.match.params.id);                                
            const newState = {
                id:documentsList.data.documentID,
                title:documentsList.data.document_title,
                data:JSON.parse(documentsList.data.data)
            }                                                           
            setDocumentData(newState);            
        };
        
        getDocumentDetails()
        
    },[]);

    const changeTitle =async (newTitle) => {        
        let newState = {
            id:documentData.id,
            title:newTitle,
            data:documentData.data
        }
        setDocumentData(newState);
        await documentEditService.changeDocumentTitle(documentData.id,newTitle);
    }

    const saveDocumentData = async (data) =>{
        let newState = documentData;
        newState.data.sections=data;        
        await documentEditService.updateDocumentDetails(documentData.id,documentData.data);
        setDocumentData(newState);            
    }

    return(
        <Aux>
            <Navbar logout={userService.logout}/>
            <Todo />
            <div className="container documentEdit">
                <div className="row">
                    <div className="col-12 col-md-7 offset-md-1">
                        <Document 
                            data={documentData.data} 
                            title={documentData.title} 
                            changeTitle={changeTitle}
                            saveData={saveDocumentData}/>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </Aux>
    )
}
 
export default DocumentEdit;
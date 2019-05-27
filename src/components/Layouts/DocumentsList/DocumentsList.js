import React,{useState, useEffect} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Navbar from '../../Navbar/Navbar';
import { userService } from '../../../services/userService'
import { documentsService } from '../../../services/documentsService'
import Cookies from 'js-cookie';
import { Link,withRouter } from 'react-router-dom';
import './DocumentsList.scss'
import Todo from '../../Todo/Todo';
import _ from 'lodash'

function DocumentsList(props){
    const [documents,setDocuments] = useState([]);

    useEffect(()=>{
        const getDocuments = async () =>{            
            const documentsList = await documentsService.getDocuments(Cookies.get('user'));            
            setDocuments(documentsList.data);            
        };
        getDocuments();        
    },[])

    const handleAddDocument = async () => {
        const newDocument = {
            userId:Cookies.get('user'),
            title:'New document',
            data:{
                sections:[],
                styles:[]
            }
        }
        const response = await documentsService.addNewDocument(newDocument);
        if(response.data.documentID){            
            props.history.push(`/document/${response.data.documentID}`)
        }
    }

    const handleRemoveDocument = async (id) => {
        let newDocuments = [...documents];        
        newDocuments = newDocuments.filter(e=>{return e.id!==id})
        await documentsService.removeDocument(id);
        setDocuments(newDocuments)
    }
    
    return(
        <Aux>
            <Todo />
            <Navbar logout={userService.logout} />
            <div className="container mt-5">
                {documents.map(doc=>{
                    return (
                        <div className="row" key={doc.id}>
                            <Link to={`/document/${doc.id}`} className="col-9 col-md-10">
                                <div className="item">{doc.id} {doc.document_title}</div>
                            </Link>
                            <div className="col-3 col-md-2 text-danger" onClick={()=>handleRemoveDocument(doc.documentID)}>delete</div>
                        </div>
                    )
                })}
                <div className="addDocument" onClick={handleAddDocument}>+</div>
            </div>
        </Aux>
    )

}
 
export default withRouter(DocumentsList);
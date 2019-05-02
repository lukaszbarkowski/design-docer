import React,{useState, useEffect} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Navbar from '../../Navbar/Navbar';
import { userService } from '../../../services/userService'
import { documentsService } from '../../../services/documentsService'
import Cookies from 'js-cookie';
import { Link,withRouter } from 'react-router-dom';
import './DocumentsList.scss'
import Todo from '../../Todo/Todo';

function DocumentsList(props){
    const [documents,setDocuments] = useState([]);

    useEffect(()=>{
        const getDocuments = async () =>{            
            const documentsList = await documentsService.getDocuments(Cookies.get('user'));            
            setDocuments(documentsList.data);
            console.log(documentsList);
            
        };
        getDocuments()
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
    
    return(
        <Aux>
            <Todo />
            <Navbar logout={userService.logout} />
            <div className="container mt-5">
                {documents.map(doc=>{
                    return (
                        <Link to={`/document/${doc.id}`}>
                            <div className="item">{doc.id} {doc.document_title}</div>
                        </Link>
                    )
                })}
                <div className="addDocument" onClick={handleAddDocument}>+</div>
            </div>
        </Aux>
    )

}
 
export default withRouter(DocumentsList);
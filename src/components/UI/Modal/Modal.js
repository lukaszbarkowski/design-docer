import React,{useState,useEffect} from 'react';
import './Modal.scss'
const Modal = (props) => {
    const [title,setTitle] = useState(props.title);

    const handleChange = (e) =>{
        const {value} = e.target;        
        setTitle(value)
    }

    return (
        <div className="modal">
            <p>Title:</p>
            <input 
                name="title"
                value={title}
                onChange={handleChange}
                type="text"/>
            
            <div className="btn btn-success" onClick={()=>props.save({title:title})}>Save</div>
        </div>
    )
}

export default Modal;
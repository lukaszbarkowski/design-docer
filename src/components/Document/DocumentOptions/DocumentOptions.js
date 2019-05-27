import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../UI/Modal/Modal';
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Auxiliary'
import './DocumentOptions.scss'
const DocumentOptions = (props) => {
    const [active,setActive] = useState(false);

    const handleSaveConfig = (data) => {
        props.changeTitle(data.title)
        setActive(!active)
    }

    return (
        <div className="options">
            <div className="config" onClick={()=>setActive(!active)}></div>
            {active?
                ReactDOM.createPortal(
                <Aux>
                    <Modal save={handleSaveConfig} title={props.title}/>
                    <Backdrop click={()=>setActive(!active)}/>
                </Aux>
                ,document.body)
                :null}
        </div>
    )
}

export default DocumentOptions;
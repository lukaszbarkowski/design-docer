import React,{useState} from 'react'
import './Area.scss'
function Area(props){
    const headerInput = React.createRef();
    const handleChange = (e) => {
        const {value} = e.target;        
        props.changeText(props.id,value)
    }

    const changeActive = () =>{
        headerInput.current.focus();
        props.changeActive(props.id)
    }

    return(
        <div className={props.id===props.current?'area active':'area'} onClick={changeActive}
            style={props.id===props.current?{background:'lightgray'}:null}>
            <textarea 
                ref={headerInput}
                name="header"
                value={props.text}
                onChange={handleChange}
                placeholder="Type here"
                type="text"/>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Area
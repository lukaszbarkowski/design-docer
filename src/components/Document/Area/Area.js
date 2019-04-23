import React from 'react'
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

    const disableActive = () =>{
        props.changeActive(null);
    }

    return(
        <div 
            className={props.id===props.current?'area active':'area'} 
            onClick={changeActive}
            style={props.id===props.current?{background:'lightgray'}:null}
            onBlur={disableActive}
            onFocusCapture={changeActive}>
            <textarea 
                ref={headerInput}
                name="header"
                value={props.text}
                onChange={handleChange}
                placeholder="Type here"
                type="text"/>
            <div className="menuItem positive moveUp"></div>
            <div className="menuItem positive moveDown"></div>
            <div className="menuItem negative delete" onClick={()=>{props.deleteSection(props.id)}}></div>
            <div className="text">{props.text}</div>
        </div>
    )
}

export default Area
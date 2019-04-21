import React,{useState} from 'react'
import './Document.scss'
import Area from './Area/Area'

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
function Document(props){
    const [sections,setSections] = useState([])

    const handleAddSection = () => {
        let newSection = {
            id:sections.length,
            text:''
        }
        setSections([...sections,newSection])
    }

    const handleSectionTextChange = (id,value) => {
        let arr = [...sections];
        arr[id].text = value;
        setSections(arr);
    }

    const handleSave = () =>{
        
    }

    return (
        <div className="container document">
            {sections.map(section=>{
                return(
                    <Area
                        key={section.id}
                        id={section.id} 
                        text={section.text}
                        changeActive={props.changeActiveSection} 
                        current={props.activeSection} 
                        changeText={handleSectionTextChange}/>
                )
            })}
            <div className="addNewArea" onClick={handleAddSection}>+</div>
            <div className="forceSave" onClick={handleSave}>Save</div>
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        activeSection:state.activeSection
    }
}

const mapDispatchToProps = dispatch => {    
    return {
        changeActiveSection: (sectionId) => dispatch({type:actionTypes.ACTIVE_SECTION,id:sectionId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Document);
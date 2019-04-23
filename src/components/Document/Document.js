import React,{useState,useEffect} from 'react'
import './Document.scss'
import Area from './Area/Area'

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
function Document(props){
    const [sections,setSections] = useState([])

    useEffect(()=>{
        setSections(props.data.sections)
    },[props.data.sections])

    const handleAddSection = () => {        
        let newSection = {
            id:sections.length,
            text:''
        }
        setSections([...sections,newSection]);
    }

    const handleDeleteSection = (id) => {
        let currentState = sections;
        currentState = currentState.filter(e=>{
            return e.id!==id
        });
        setSections(currentState)
    }

    const handleSectionTextChange = (id,value) => {
        let arr = [...sections];
        arr[id].text = value;
        setSections(arr);
    }
    
    return (
        <div className="container document">
            {(sections || []).map(section=>{
                return(
                    <Area
                        key={section.id}
                        id={section.id} 
                        text={section.text}
                        changeActive={props.changeActiveSection} 
                        deleteSection={handleDeleteSection}
                        current={props.activeSection} 
                        changeText={handleSectionTextChange}/>
                )
            })}
            <div className="addNewArea" onClick={handleAddSection}>+</div>
            <div className="forceSave" onClick={()=>{props.saveData(sections)}}>Save</div>
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
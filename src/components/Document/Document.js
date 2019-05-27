import React,{useState,useEffect} from 'react'
import './Document.scss'
import Area from './Area/Area'
import DocumentOptions from './DocumentOptions/DocumentOptions'

import _ from 'lodash'

import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
function Document(props){
    const [sections,setSections] = useState([])
    const [styles,setStyles] = useState([])

    useEffect(()=>{
        setSections(props.data.sections)
        setStyles(props.data.styles)
    },[props.data.sections,props.data.styles])

    const handleAddSection = () => {  
        let newSection;   
        if(sections.length>0){
            newSection = {
                id:_.maxBy(sections,(o)=>{return o.id}).id+1,
                text:''
            }
        }
        else{
            newSection ={
                id:1,
                text:''
            }
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
        arr[arr.findIndex(e => e.id===id)].text = value;    
        setSections(arr);
    }
    
    return (
        <div className="document">
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
            <DocumentOptions 
                title={props.title}
                changeTitle={props.changeTitle}
            />
            <div className="addNewArea" onClick={handleAddSection}></div>
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
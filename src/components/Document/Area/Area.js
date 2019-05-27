import React,{useState,useEffect} from 'react';
import './Area.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Area = (props) => {    
    const changeActive = () =>{
        console.log('change');
        props.changeActive(props.id); 
        
    }

    const disableActive = () =>{
        props.changeActive(null);
    }

    const handleChange = (value) => {
        props.changeText(props.id,value)
    }

    return (
        <div className="area">
            {props.current===props.id?
                <ReactQuill 
                    value={props.text}
                    onChange={handleChange}
                    modules={{
                        toolbar:[
                            [{'header':[1,2,false]}],
                            ['bold','italic','underline','strike','blockquote'],
                            [{'list':'ordered'},{'list':'bullet'}],
                            [{'align':''},{'align':'center'},{'align':'right'},{'align':'justify'}],
                            ['link','image']
                        ]
                    }}>
                </ReactQuill>
                :<div className="areaText" dangerouslySetInnerHTML={{__html:props.text}} />}
             <div className="menuItem negative delete" onClick={()=>{props.deleteSection(props.id)}}></div>
             <div className="menuItem positive edit" 
                onClick={()=>{
                    if(props.current!==props.id){
                        changeActive();
                    }
                    else{
                        disableActive();
                    }
                }
            }
            ></div>
        </div>
        
    )
}

export default Area
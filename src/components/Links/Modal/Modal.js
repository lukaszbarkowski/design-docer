import React from 'react';
import './Modal.scss'

const modal = (props) => {
    if(!props.modal)return null;
    else{
        return(
        <div className='modal'>
            <div className="container">
                <div className="closeModal" onClick={props.hide}><span></span></div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                  </div>
                  <input id='nameId' type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>

                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Link</span>
                  </div>
                  <input id='linkId' type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Image</span>
                  </div>
                  <input id='linkImage' type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                </div>
                <button className='btn btn-block' onClick={props.add}>Add</button>
            </div>
        </div>)
    }
}
 
export default modal;
import React from 'react';
import './LinkItem.scss';

const linkItem = (props) => {
    let counter = -1;
    const items = props.links.map((e) => {
        counter++;
        let id = 'item' + counter;
        if(e===0){
            return(
                <div id={id} key={counter} className='linkItem'>
                    <a>
                        <div className="col">
                            <div className="row" onClick={()=>props.modal(props.parentIndex.slice(-1),id.slice(-1))}>
                                <img src="https://via.placeholder.com/150/a7d3e9/FFFFFF/?text=Add" alt=""/>
                            </div>
                        </div>
                    </a>
                </div>
            )
        }
        else{
            return(
                <div id={props.names[counter]+id} key={counter} className='linkItem'>
                    <div className="deleteLinkItem" onClick={()=>props.deleteItem(props.names[id.slice(-1)]+id)}></div>
                    <a href={props.links[counter]}>
                        <div className="col">
                            <div className="row">
                                <img src={props.images[counter]} alt=""/>
                            </div>
                            {/* <div className="row">
                                <b>{props.names[counter]}</b>
                            </div> */}
                        </div>
                    </a>
                </div>
            )
        }
    });
    return (
        <div className='row'>{items}</div>
    );
}
 
export default linkItem;
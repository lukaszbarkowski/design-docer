import React from 'react';
import './LinksBox.scss';
import LinkItem from './LinkItem/LinkItem';
import Aux from '../../../hoc/Auxiliary'

const linksBox = (props) => {
    let counter=-1;
    const items = props.info.map(e=>{
        counter++;
        let id = 'box'+counter;
        return(
            <div id={id} key={counter} className="col-md-12 linksContainer">
                <div className="removeLinksBox" onClick={()=>props.deleteBox(id.slice(-1))}></div>
                <LinkItem 
                    links={e.links} 
                    names={e.names}
                    images={e.images} 
                    modal={props.modal} 
                    deleteItem={props.deleteItem}
                    parentIndex={id}/>
            </div> 
        )
    })
    return (
        <Aux>
            <div className="col-md-7">{items}
                <div className="btn addBox" onClick={props.click}>+</div>
            </div>
        </Aux>
    );
}
 
export default linksBox;
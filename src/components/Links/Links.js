import React,{Component} from 'react';
import LinksBox from './LinksBox/LinksBox';
import Modal from './Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import CustomPanel from './CustomPanel/CustomPanel';
import './Links.scss';

class Links extends Component{
    
    constructor(props){
        super(props);
        const storage = localStorage;
        let boxes = storage.getItem('boxes');
        boxes = JSON.parse(boxes);
        if(boxes){
            this.state={
                boxes:boxes,
                modal:false
            }
        }
        else{
            this.state={
                boxes:[]
            }
        }

    }

    addBox = () =>{
        let emptyBox = {
            names:[0],
            links:[0],
            images:[0]
        }
        this.setState({
            boxes:[...this.state.boxes,emptyBox]
        })
        const storage = localStorage;
        let oldBoxes = JSON.parse(storage.getItem('boxes'));
        let newBoxes;
        if(oldBoxes){
            newBoxes = [...oldBoxes,emptyBox];
        }
        else{
            newBoxes = [emptyBox];
        }
        newBoxes = JSON.stringify(newBoxes);
        storage.setItem('boxes',newBoxes);
        
    }

    deleteBox = (index) =>{
        let boxes = this.state.boxes;
        boxes.splice(index,1);
        this.setState({
            boxes:boxes
        })
        const storage = localStorage;
        let storageBoxes = JSON.parse(storage.getItem('boxes'));
        storageBoxes.splice(index,1);
        storageBoxes = JSON.stringify(storageBoxes);
        storage.setItem('boxes',storageBoxes);
    }

    addLinkModal = (index,item) =>{
        this.setState({
            modal:!this.state.modal,
            addingLinkParentIndex:index,
            addingLinkItem:item
        })
    }
    
    hideModal = () =>{
        this.setState({
            modal:!this.state.modal
        })
    }

    addLink = () =>{
        let item = this.state.addingLinkItem;
        let parent = this.state.addingLinkParentIndex;
        let link = document.getElementById('linkId');
        let image = document.getElementById('linkImage');
        let name = document.getElementById('nameId');
        let oldBox = this.state.boxes;
        
        if(link.value && name.value){
            oldBox[parent].names[item]=name.value;
            oldBox[parent].links[item]=link.value;
            if(!image.value){
                oldBox[parent].images[item]="https://via.placeholder.com/150/a7d3e9/FFFFFF/?text="+name.value;
            }
            else{
                oldBox[parent].images[item]=image.value;
            }

            oldBox[parent] = {
                names:[...oldBox[parent].names,0],
                images:[...oldBox[parent].images,0],
                links:[...oldBox[parent].links,0]
            }
            this.setState({
                boxes:oldBox,
                modal:false
            })
            const storage = localStorage;
            let oldLinks = JSON.parse(storage.getItem('boxes'));
            oldLinks[parent].links[item]=link.value;
            oldLinks[parent].images[item]=image.value;
            oldLinks[parent].names[item]=name.value;
            oldLinks[parent] = {
                names:[...oldLinks[parent].names,0],
                images:[...oldLinks[parent].images,0],
                links:[...oldLinks[parent].links,0]
            }
            oldLinks = JSON.stringify(oldLinks);
            storage.setItem('boxes',oldLinks);
        }
    }

    deleteLinkItem = (key)=>{
        console.log(localStorage);
        console.log(this.state.boxes);
        let item = document.getElementById(key);
        let parent = item.parentElement.parentElement;
        let itemIndex = item.id.slice(-1);
        let parentIndex = parent.id.slice(-1);

        let boxes = [...this.state.boxes];
        if(boxes[parentIndex].links.length>1){
            boxes[parentIndex].images.splice(itemIndex,1);
            boxes[parentIndex].names.splice(itemIndex,1);
            boxes[parentIndex].links.splice(itemIndex,1);
        }
        this.setState({
            boxes:boxes
        })
        const storage = localStorage;
        let storageBoxes = JSON.parse(storage.getItem('boxes'));
        storageBoxes[parentIndex].images.splice(itemIndex,1);
        storageBoxes[parentIndex].names.splice(itemIndex,1);
        storageBoxes[parentIndex].links.splice(itemIndex,1);
        storageBoxes = JSON.stringify(storageBoxes);
        storage.setItem('boxes', storageBoxes);
    }

    render(){
        return (
            <div className="panelRight pt-3">
                <div className="row">
                <CustomPanel />
                <LinksBox
                    info = {this.state.boxes}
                    click = {this.addBox}
                    modal = {this.addLinkModal}
                    deleteBox = {this.deleteBox}
                    deleteItem = {this.deleteLinkItem}
                /></div>
                <Modal 
                    modal={this.state.modal} 
                    add={this.addLink}
                    hide={this.hideModal}/>
                    {this.state.modal?<Backdrop animation="fadeIn" click={this.hideModal}/>:null}
            </div>
        );
    }
}
 
export default Links;
import React,{Component} from 'react';
import './Todo.scss';
import Backdrop from '../UI/Backdrop/Backdrop';
import Cookies from 'js-cookie';

import { dataManagement } from '../../services/dataManagement'

import Aux from '../../hoc/Auxiliary';
import List from './List/List';

class Todo extends Component {

    constructor(props){
        super(props);
        this.state = {
            todos:[],
            inputValue:'',
            backdrop:false
        }

    }
    componentDidMount = () => {
        dataManagement.getTodo()
            .then(res=>{
                let temp =[];                
                res.data.data.forEach(e=>{
                    temp = [...temp,e];
                })
                this.setState({
                    todos:temp
                })
            })
    }

    addTodo = (e) =>{
        e.preventDefault();
        dataManagement.postTodo(Cookies.get('user'),this.state.inputValue)
        .then(res=>{
            dataManagement.getTodo()
            .then(res=>{
                let temp =[];
                res.data.data.forEach(e=>{
                    temp = [...temp,e];
                })
                this.setState({
                    todos:temp,
                    inputValue:''
                })
            })
        })
        
    }

    inputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    removeTodo = (key) =>{
        dataManagement.removeTodo(key)
        .then(res=>{
            dataManagement.getTodo()
            .then(res=>{
                let temp =[];
                res.data.data.forEach(e=>{
                    temp = [...temp,e];
                })
                this.setState({
                    todos:temp,
                })
            })
        })
    }

    backdropChange = () =>{
        this.setState({
            backdrop:!this.state.backdrop
        })
    }

    render(){
        return (
            <Aux>
                <div className={this.state.backdrop?'leftPanelTop expand':'leftPanelTop'}>
                    <div className="display-4 mb-3"><b>My todo list:</b></div>
                    <List 
                        listItems={this.state.todos}
                        empty={this.state.isEmpty}
                        click={this.removeTodo}/>
                    <div className="input-group mb-3">
                        <form onSubmit={this.addTodo}>
                            <input 
                                onChange={this.inputChange} 
                                type="text" 
                                id='inputValue' 
                                value={this.state.inputValue}
                                name='inputValue' 
                                className="form-control" 
                                ></input>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary"><b>+</b></button>
                            </div>
                        </form>
                    </div>
                    <div className='slideInRight' onClick={this.backdropChange}></div>
                </div>
                {this.state.backdrop?<Backdrop id="todoBd" click={this.backdropChange} />:null}
            </Aux>
        );
    }
}
 

export default Todo;
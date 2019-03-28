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
            inputValue:''
        }

    }
    componentDidMount = () => {
        dataManagement.getTodo()
            .then(res=>{
                let temp =[];
                res.data.forEach(e=>{
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
                res.data.forEach(e=>{
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
                res.data.forEach(e=>{
                    temp = [...temp,e];
                })
                this.setState({
                    todos:temp,
                })
            })
        })
    }

    backdropChange = (id,parent) =>{
        let bg = document.getElementById(id);
        let main = document.getElementsByClassName(parent)[0];
        if(this.state.backdrop){
            if(bg){
                bg.classList.add('fadeOut');
                main.classList.remove('active');
                main.classList.add('inactive');
            }
            setTimeout(()=>{
                this.setState({
                    backdrop:!this.state.backdrop
                })
            },500)
        }
        else{
            main.classList.remove('inactive');
            main.classList.add('active');
            this.setState({
                backdrop:!this.state.backdrop
            })
        }
    }

    render(){
        return (
            <Aux>
                <div className="leftPanelTop inactive">
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
                    <div className={this.state.backdrop?'slideInRight back':"slideInRight"} onClick={()=>{this.backdropChange('todoBd','leftPanelTop')}}></div>
                </div>
                {this.state.backdrop?<Backdrop id="todoBd" animation="fadeIn" click={()=>{this.backdropChange('todoBd','leftPanelTop')}} />:null}
            </Aux>
        );
    }
}
 

export default Todo;
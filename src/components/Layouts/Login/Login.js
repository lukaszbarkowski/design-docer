import React,{Component} from 'react';
import Cookies from 'js-cookie';

import { userService } from '../../../services/userService'
import {
    Link,
	withRouter
} from 'react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);
        let auth = Cookies.get('user')?true:false;
        this.state ={
            username:'',
            password:'',
            submitted:false,
            loading:false,
            error:'',
            authentication:auth
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
        this.proceed = this.proceed.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        userService.login(this.state.username,this.state.password)
            .then(auth=>{
                if(auth)this.props.history.push('/documents');
            })
            .catch(error=>{
                this.setState({
                    username:'',
                    password:'',
                    error:error
                })
            })
    }

    proceed(){
        this.props.history.push('/documents');
    }

    logout(){
        userService.logout();
        this.setState({
            authentication:false
        })
    }

    render(){
        if(this.state.authentication){
            return(
                <div className="container mt-5">
                    <div className="jumbotron-fluid">
                        <div className="display-4">Hello</div>  
                        <button className="btn btn-primary" onClick={this.proceed}>Proceed</button><br></br>
                        <button className="btn btn-danger" onClick={this.logout}>Logout</button>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="container mt-5">
                    <div className="jumbotron-fluid">
                        <div className="display-4">Login</div>  
                        <form onSubmit={this.handleSubmit} method="POST">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="username" 
                                    id="username"
                                    placeholder="Username" 
                                    value={this.state.username}
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    name="password" 
                                    id="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    placeholder="Password">
                                </input>
                            </div>
                            {this.state.error?
                            <div className="alert alert-danger" role="alert">
                                {this.state.error}
                            </div>:''}
                            <button className="btn btn-primary" disabled={this.state.loading}>Login</button>
                            <Link to="/" className="btn btn-primary ml-2">Back</Link>
                        </form>
                    </div>
                </div>
            )
        }
    }
}

export default withRouter(Login);
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary'
class Landing extends Component{

    render(){
        return(
            <Aux>
                <Link to="/login" className="btn btn-primary">Login</Link>
                <Link to="/register" className="btn btn-primary ml-2">Register</Link>
            </Aux>
        )
    }
}

export default Landing;
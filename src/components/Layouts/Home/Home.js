import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import Todo from '../../Todo/Todo';
import Navbar from '../../Navbar/Navbar';
import { userService } from '../../../services/userService'



class Home extends Component{
    
    componentDidMount(){
        
    }

    render(){
        return(
            <Aux>
                <Navbar logout={userService.logout} />
                <Todo />
            </Aux>
        )

    }
}
 
export default Home;
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/Auxiliary';
import './Landing.scss'
class Landing extends Component{

    render(){
        return(
            <Aux>
                <div className="banner">
                    <div className="row banner">
                        <div className="col-12">
                            <img src="https://placehold.it/1920x400" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container main">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Link to="/login" className="btn btn-primary">Login</Link>
                        </div>
                        <div className="col-12 col-md-6">
                            <Link to="/register" className="btn btn-primary ml-2">Register</Link>
                        </div>
                    </div>
                    <div className="row firstSection d-flex align-items-center">
                        <div className="col-12 col-md-5 image">
                            <img src="https://placehold.it/500x500" alt=""/>
                        </div>
                        <div className="col-12 col-md-7 longText">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta alias quo, eum earum architecto natus? Animi beatae veritatis labore nam accusantium optio enim numquam nisi magnam, doloribus veniam, aliquam aperiam.
                            Beatae voluptatum iure nesciunt. Expedita, excepturi! Sequi illum, ratione commodi numquam repudiandae, doloribus exercitationem minus animi omnis nisi quibusdam, aperiam accusantium ipsum nihil sint quia eum a ducimus inventore. Tempore.
                            Vel adipisci harum sapiente eum eligendi, omnis laborum modi magni expedita voluptates velit consectetur numquam doloribus fuga? Optio saepe culpa voluptates blanditiis maxime omnis voluptatum inventore quam fugit? Eius, eaque!
                            Incidunt optio inventore aliquid dolorem saepe ullam laboriosam nam beatae officia eveniet consequuntur rem corporis accusantium dolores nulla nemo natus nobis nisi perferendis accusamus voluptatem ratione, eligendi eos. Fugiat, asperiores?
                            Exercitationem magnam possimus rerum explicabo, hic quia facere suscipit. Velit, blanditiis quibusdam nihil, iure nesciunt assumenda molestiae provident quas pariatur debitis culpa esse sit rerum, vitae at. Fugiat, dolore rem!
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default Landing;
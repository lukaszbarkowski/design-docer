import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';

const navbar = (props) => {
    return (
        <div className="container-fluid navbar">
            <div className="row">
                <div className="col-md-1 text-center click">
                    <Link to="/">Navbar</Link>
                </div>
                <div className="col-md-1 offset-md-10 text-center click">
                    <Link to="/" onClick={props.logout}>Logout</Link>
                </div>
            </div>
        </div>
    );
}
 
export default navbar;
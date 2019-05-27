import React from 'react';
import './Navbar.scss'
import { Link } from 'react-router-dom';

const navbar = (props) => {
    return (
        <div className="container-fluid navbar">
            <div className="row">
                <div className="col-12 col-md-1 text-center click">
                    <Link to="/">Buckle</Link>
                </div>
                <div className="col-12 col-md-2 offset-md-7 text-center click">
                    <Link to="/documents">Documents</Link>
                </div>
                <div className="col-12 col-md-2 text-center click">
                    <Link to="/" onClick={props.logout}>Logout</Link>
                </div>
            </div>
        </div>
    );
}
 
export default navbar;
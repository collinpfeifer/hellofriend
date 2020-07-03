import React, {Component} from 'react'
import HelloFriend from "../images/happy-face.png"
import {Link} from "react-router-dom";
class Header extends Component {
    render() {
        return ( 
            <div className="Header">
                <nav>
                    <img style={{float: "left", paddingTop:"12px"}} src={HelloFriend} alt="hello friend" width="100px"/>
                    <ul>
                        <li><Link to="/" className="a">Home</Link></li>
                        <li><Link to="/release" className="a">Release</Link></li>
                        <li><Link to="/support" className="a">Support</Link></li>
                        <li><Link to="/contact" className="a">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header
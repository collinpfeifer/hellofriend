import React, {Component} from 'react'
import HelloFriend from "../images/happy-face.png"
import {Link} from "react-router-dom";
class Header extends Component {
    render() {
        const lastStyle = {paddingRight:"4.5%"};
        const imgStyle = {float: "left", paddingTop:"12px"};
        return ( 
            <div className="Header">
                <nav>
                    <img style={imgStyle} src={HelloFriend} alt="hello friend" width="100px"/>
                <ul>
                        <li><Link to="/" className="a">Home</Link></li>
                        <li><Link to="/release" className="a">Release</Link></li>
                        <li><Link to="/" className="a">Advice</Link></li>
                        <li><Link to="/" className="a">Support</Link></li>
                        <li><Link to="/" className="a">Contact</Link></li>
                        <li style={lastStyle}><Link to="/" className="a">FAQ</Link></li>
                        
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header
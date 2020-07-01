import React, {Component} from 'react'
import HelloFriend from "../images/happy-face.png"
class Header extends Component {
    render() {
        const lastStyle = {paddingRight:"4.5%"};
        const imgStyle = {float: "left", paddingTop:"12px"};
        return ( 
            <div className="Header">
                <nav>
                    <img style={imgStyle} src={HelloFriend} alt="hello friend" width="100px"/>
                <ul>
                    <li><a href="#"><strong>Home</strong></a></li>
                            <li><a href="#">Release</a></li>
                            <li><a href="#"><b>Advice</b></a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Contact</a></li>
                            <li style={lastStyle}><a href="#">FAQ</a></li>
                        
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header
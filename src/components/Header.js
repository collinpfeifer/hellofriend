import React, { Component } from 'react'
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
                            <li>
                            <div className="DropdownRelease">
                                <a href="#">Release</a>
                                    <div className="ReleaseContent">
                                        <p>
                                        Holder
                                        </p>                            
                                    </div>
                                </div>
                            </li>
                            <li>
                            <div className="DropdownAdvice">
                                <a href="#">Advice</a>
                                <div className="AdviceContent">
                                        <p>
                                        Holder
                                        </p>                            
                                </div>
                                </div>
                            </li>
                        
                        
                            <li>
                            <div className="DropdownSupport">
                                <a href="#">Support</a>
                                <div className="SupportContent">
                                    <p>
                                        Holder
                                    </p>
                                </div>
                                </div>
                            </li>
                        
                    
                            <li><a href="#">Contact</a></li>
                            <li style={lastStyle}><a href="#">FAQ</a></li>
                        
                </ul>
                </nav>
            </div>
        )
    }
}

export default Header
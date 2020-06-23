import React, { Component } from 'react';
class Header extends Component {
    render() {
        return ( 
        <div className = "Header">
            <header>
                <nav>
                    <ul>
                        <li><a href="#"><img src="/images/smiley.png" alt="smiley face"/></a></li>
                        <li><a href="#">Release</a></li>
                        <li><a href="#">Advice</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </nav>
            </header>
        </div>
        )
    }
}

export default Header
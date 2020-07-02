import React, {Component} from "react"

import HelloFriend from "../images/happy-face.png"

class TopContent extends Component{
    render(){
        return(
            <div className="TopContent">
                <div className="Main">
                    <img className="MainPic" src={HelloFriend} alt="hello friend"/>
                    <h2>you're worth it and i'm glad you're here</h2>
             </div>
            </div>
        )
    }
}
export default TopContent
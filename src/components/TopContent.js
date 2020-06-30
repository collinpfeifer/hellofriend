import React, {Component} from "react"
import Clouds from "../images/clouds.mp4"
import HelloFriend from "../images/happy-face.png"

class TopContent extends Component{
    render(){
        return(
            <div className="TopContent">
                <div className="Background">
                    <video autoPlay loop muted>
                        <source src={Clouds} type="video/mp4"/>
                    </video>
                    </div>
                <div className="Main">
                    <img src={HelloFriend} alt="hello friend"/>
                    <h2>I'm glad you're here</h2>
             </div>
            </div>
        )
    }
}
export default TopContent
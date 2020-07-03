import React, {Component} from "react"
import Clouds from "../images/clouds.mp4"

class Background extends Component {
    render(){
        return (
            <div className="Background">
                <video autoPlay loop muted>
                    <source src={Clouds} type="video/mp4"/>
                </video>
            </div>
        )
    }
}
export default Background
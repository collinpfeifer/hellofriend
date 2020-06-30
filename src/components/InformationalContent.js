import React, {Component} from 'react'
import SadFace from "../images/sadface.png"
import LipsFace from "../images/lipssealedface.png"
import AngryFace from "../images/angryface.png"


class InformationalContent extends Component {
    render(){
        
        return(
            <div className="InformationalContent">
                <div className="InformationalText">
                    <h1>What is this?</h1>
                    <p>This is hello friend, a completely (yes, completely) anonymous notebook based therapy app.
                    One of the number one complaints I hear for the regular notebook based therapy form is the idea 
                    that you can always see what you previously tried to release from your mind. I decided to try and 
                    solve this by inventing hello friend, where everyhting you write and release will never be seen again.
                    Not only is this a healthier way of healing and releasing emotions, it is also a beginning to a reccomended
                    daily scheudle, which not only help fight depression and anxiety, but also mental diseases seen later in 
                    life, such as alzeihmers and dementia. Happy journaling :)</p>
                </div>
                <div className="Boxwrap">
                        <div className="Box">
                            <img style={{width:"75px"}} src={SadFace} alt="sad face"/>
                            <h1>Depression</h1>
                            <p>box</p>
                        </div>
                        <div className="Box">
                            <img style={{width:"65px"}} src={LipsFace} alt="lips face"/>
                        <h1>Anxiety</h1>
                            <p>box</p>
                        </div>
                        <div className="Box">
                            <img style={{width:"62px"}} src={AngryFace} alt="angry face"/>
                        <h1>Dementia/Alzheimers</h1>
                            <p>box</p>
                        </div>
                </div>
            </div>    
        )
    }
}

export default InformationalContent
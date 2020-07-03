import React, {Component} from "react"
import SadFace from "../images/sadface.png"
import LipsFace from "../images/lipssealedface.png"
import AngryFace from "../images/angryface.png"
import HelloFriend from "../images/happy-face.png"



class HomePage extends Component {
    render(){
        return(
            <div className="HomePage">
                <div className="TopContent">
                <div className="Main">
                    <img className="MainPic" src={HelloFriend} alt="hello friend"/>
                    <h2>you're worth it and i'm glad you're here</h2>
             </div>
            </div>

            <div className="InformationalContent" >
                <div className="InformationalText">
                    <h1 style={{fontSize:"70px"}}>hi!</h1>
                    <h2 style={{color:"#c22c22"}}>and welcome to hello friend!</h2>
                    <p>your new best friend and a completely (yes, completely) anonymous notebook based therapy app.
                    this is a new notebook where everything you write will never be seen again.
                    not only is this a healthier way of healing and releasing emotions, it is also a new beginning to a recommended
                    daily schedule, which not only helps fight depression and anxiety, but also mental diseases seen later in 
                    life, such as alzheimer's and dementia. happy journaling :)</p>
                </div>
                
                <div className="Boxwrap">
                        <div className="Box">
                            <img style={{width:"75px"}} src={SadFace} alt="sad face"/>
                            <h1 style={{fontWeight:'bolder', fontSize:"40px", color:"#cc0000"}}>depression</h1>
                            <p style={{fontSize:"19px"}}>one of the most common mental disorders affecting over 16.1 million americans, 
                                most cases arise around 33 years old but will last at least 2 weeks. some possible symptoms
                                include (but not always) concentration problems, feelings of helplessness and worthlessness,
                                insomnia or sleeping too much, and overeating or appetite loss
                            </p>
                        </div>
                        <div className="Box">
                            <img style={{width:"65px"}} src={LipsFace} alt="lips face"/>
                        <h1 style={{fontWeight:'bolder', fontSize:"40px", color:"#cc0000"}}>anxiety</h1>
                            <p style={{fontSize:"19px"}}>anxiety disorders are the most common mental disorders affecting 40 million adults every year
                                ,but thankfully are some of the most treatable mental disorders. unfortuately only 36.95% affected 
                                recieve treatment. some possible symptoms include (but not always) feelings of dread, hyperventilation, and difficulty focusing.
                            </p>
                        </div>
                        <div className="Box">
                            <img style={{width:"62px"}} src={AngryFace} alt="angry face"/>
                        <h1 style={{fontWeight:'bolder', fontSize:"40px", color:"#cc0000"}}>alzheimer's</h1>
                            <p style={{fontSize:"19px"}}>alzheimer's is a less common mental disorder, but still very serious, affecting an estimated 5.8 million adults
                                aged 65 and older. the main symptoms of alzheimer's is memory loss, specifically in remembering people, places, and events.
                                some other symptoms include (but not always) repeating statements or questions and misplacing items.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default HomePage
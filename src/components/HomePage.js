import React, {Component} from "react"
import TopContent from "./TopContent.js"
import InformationalContent from "./InformationalContent.js"


class HomePage extends Component {
    render(){
        return(
            <div className="HomePage">
                <TopContent />
                <InformationalContent />
            </div>
        )
    }
}
export default HomePage
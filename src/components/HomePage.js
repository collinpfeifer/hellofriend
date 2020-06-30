import React, {Component} from "react"
import Header from "./Header.js"
import TopContent from "./TopContent.js"
import InformationalContent from "./InformationalContent.js"

class HomePage extends Component {
    render(){
        return(
            <div className="HomePage">
                <Header />
                <TopContent />
                <InformationalContent />
            </div>
        )
    }
}
export default HomePage
import React, {Component} from "react"
import Header from "./Header.js"
import TopContent from "./TopContent.js"

class HomePage extends Component {
    render(){
        return(
            <div className="HomePage">
                <Header />
                <TopContent />
            </div>
        )
    }
}
export default HomePage
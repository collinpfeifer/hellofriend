import React, {Component} from "react"
import Header from "../components/Header.js"
import MainContent from "./TopContent.js"

class HomePage extends Component {
    render(){
        return(
            <div className="HomePage">
                <Header />
                <MainContent />
            </div>
        )
    }
}
export default HomePage
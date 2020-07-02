import React, {Component} from "react";


class ReleasePage extends Component {
    deleteAll = () => {
        document.getElementById("output").value="";
    }
    render() {
        return(
            <div className="ReleasePage">
                <div className="ReleaseContent">
                    <h1>release</h1>
                    <p>a place where all your emotions, anxious thoughts and scary ideas can be released to never be seen again</p>
                    <div className="ReleaseInput">
                    <textarea id="output" rows="20"></textarea>
                    <button style={{width:"80px", height:"auto", fontSize:"18px"}}onClick={this.deleteAll}>done</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ReleasePage
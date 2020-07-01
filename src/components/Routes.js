import React from "react"
import {Route, Switch} from "react-router-dom"
import HomePage from "./HomePage.js"
import ReleasePage from "./ReleasePage.js"

const Routes = () => {
    return(
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/release" component={ReleasePage}/>
            </Switch>
        </div>
    )
}

export default Routes
import React from "react"
import {Route, Switch} from "react-router-dom"
import HomePage from "./HomePage.js"
import ReleasePage from "./ReleasePage.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
const Routes = () => {
    return(
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/release" component={ReleasePage}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes
import React from "react"
import {Route, Switch} from "react-router-dom"
import HomePage from "./HomePage.js"
import ReleasePage from "./ReleasePage.js"
import SupportPage from "./SupportPage.js"
import ContactPage from "./ContactPage.js"
import Header from "./Header.js"
import Footer from "./Footer.js"
import Background from "./Background.js"
const Routes = () => {
    return(
        <div>
            <Header />
            <Background />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/release" component={ReleasePage}/>
                <Route exact path="/support" component={SupportPage} />
                <Route exact path="/contact" component={ContactPage}/>
            </Switch>
            <Footer />
        </div>
    )
}

export default Routes
import React from "react";
import NavBar from "./navBar";
import Login from "./login";
import Main from "./main";
import "./App.css"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Contacts from "./contacts";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/login:type?' component={Login}/>
                    <Route path='/contacts' component={Contacts}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
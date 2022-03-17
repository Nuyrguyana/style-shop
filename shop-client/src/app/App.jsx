import React from "react";
import NavBar from "./navBar";
import Login from "./login";
import Main from "./main";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavBar/>
                <Switch>
                    <Route path='/' exact component={Main}/>
                    <Route path='/login:type?' component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
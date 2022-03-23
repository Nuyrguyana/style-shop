import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";


const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Main</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/contacts'>Сontacts</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/directory'>Directory</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/login'>Login</Link>
        </li>
            <li className="nav-item">
            <Link className="nav-link" to='/basket'>Basket</Link>
        </li>
            <SearchBar />
        </ul>

    )
}

export default NavBar;
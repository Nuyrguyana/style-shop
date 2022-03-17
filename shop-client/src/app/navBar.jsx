import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>главная</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/info'>о нас</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to='/directory'>каталог</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to='/login'>войти</Link>
        </li>
            <li className="nav-item">
            <Link className="nav-link" to='/basket'>корзина</Link>
        </li>
        </ul>
    )
}

export default NavBar;
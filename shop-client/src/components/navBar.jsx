import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink, useHistory} from "react-router-dom";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {observer} from "mobx-react-lite";
import otto from '../assets/oto-removebg-preview.png'

const NavBar = observer(() => {
        const {user} = useContext(Context)
        const history = useHistory()
        return (
            <Navbar className='header'>
                <Container>
                    <NavLink className='brand-style' to={SHOP_ROUTE}>OTTO<img src={otto} width={80}/>MANN</NavLink>

                    {user.isAuth ?
                        <Nav className='ml-auto' style={{color: 'white'}}>
                            <Button
                                className='btn-navbar'
                                // variant={'outline-light'}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >
                                Админ панель
                            </Button>
                            <Button
                                className='btn-navbar'
                                // variant={'outline-light'}
                                onClick={() => history.push(LOGIN_ROUTE)}
                            >
                                Выйти
                            </Button>
                        </Nav>
                        :
                        <Nav className='ml-auto' style={{color: 'white'}}>
                            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        );
    }
)

export default NavBar;
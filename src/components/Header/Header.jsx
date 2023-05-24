import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";


const Header = (props) => {

    return <header className={s.header}>
        <img src="https://i.ibb.co/wKtQDPK/logo.png"  alt="Logo"/>
        <div className={s.LoginItem}>
            {props.isAuth ? <NavLink to={`/login`}>{props.login} - <button onClick={props.logout}>Log out</button></NavLink>  : <NavLink to={`/login`}>
                Login
            </NavLink>}

        </div>
    </header>
}

export default Header;
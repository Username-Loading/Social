import React from "react";
import { NavLink } from "react-router-dom";
import Friend from "./Friend/Friend";
import s from './Friends.module.css'


const Friends = (props) => {
    let FriendsItem = props.FriendsItem.map(f => <Friend name={f.name} img={f.img} />)
    return (
        <div className={s.FriendsElements}>
            <NavLink to="/frends" className={navData => navData.isActive ? s.active : s.item}>
                Friends
            </NavLink>
            <div className={s.Friends}>
                {FriendsItem}

            </div>
        </div>
    )
}

export default Friends;
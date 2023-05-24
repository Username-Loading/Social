import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css"

const Dialog = (props) => {
    return <div>
        <NavLink to={"/dialogs/" + props.id} className={navData => navData.isActive ? s.active : s.dialogsItem}>
            <div className={s.dialog}>
            <div>
                <img src={props.img} />
            </div>
            <div className={s.dialogName}>
                {props.name}
            </div>
            </div>
        </NavLink>
    </div>
}

export default Dialog;
import React from "react";
import s from './../Friends.module.css'

const Friend = (props) => {
    return (
        <div>
            <div >
                <img src={props.img} />
            </div>
            <div>
                {props.name}
            </div>
        </div>
    )
}

export default Friend
import React from "react";
import s from "./ProfileInfo.module.css"
import UserDefault from "../../../assets/images/UserDefault.png"
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    return <div >
        <div className={s.content}>
            <img src='https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_960_720.jpg' alt="Hueta"/>
        </div>
        <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
        <div className={s.avatar}>
            <img src={props.profile != null ? props.profile.photos.large : UserDefault}/>
            
            ava
        </div>
    </div>
}

export default ProfileInfo;
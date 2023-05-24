import React from "react";
import s from "./Users.module.css"
import UserDefault from "../../assets/images/UserDefault.png"
import { NavLink } from "react-router-dom";

let Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pageCount; i++) { pages.push(i) }

    return <div>
        <div className={s.userPage}>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onPageChanged(p) }}
                    >{p}
                    </span>
                })
            }
        </div>
        {
            props.Users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : UserDefault} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            u.followed ?
                                <button onClick={() => {props.unfollow(u.id)}} >Un follow</button> :
                                <button onClick={() => {props.follow(u.id)}} >Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                </span>

            </div>)
        }
    </div>
}

export default Users;
import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import {setAuthUserData, getLogin, logout } from "../../redux/AuthReducer"


class HeaderComponent extends React.Component {

    componentDidMount() {
        this.props.getLogin()
    }

    render(){
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
})

const HeaderContainer = connect(mapStateToProps, {setAuthUserData, getLogin, logout})(HeaderComponent)

export default HeaderContainer
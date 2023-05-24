import React, { Component } from "react";
import { connect } from "react-redux";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.Auth.isAuth
})

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                debugger
                return history.push('/login');
            }

            return <Component {...this.props} />
        }
    }

    let connectAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connectAuthRedirectComponent
}



import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../commen/FormsControls/FormControls";
import { requared } from "../utilit/validators";
import { connect } from "react-redux";
import { login, } from "../../redux/AuthReducer"
import { redirect } from "react-router";
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();



const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Input} name={"email"} placeholder="email"  validate={[requared]}/>
        </div>
        <div>
            <Field component={Input} name={"password"} placeholder="Password" validate={[requared]} type={"password"}/>
        </div>
        <div>
            <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[requared]}/> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        history.push("/profile")
    }

    return (
        <div>
            <h4>Login</h4>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)
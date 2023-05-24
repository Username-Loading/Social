import { redirect, useParams } from 'react-router-dom';
import React from "react";
import { setUsersProfile, getUser, getStatus, updateStatus } from "../../redux/ProfileReducer";
import Profile from "./Profile";
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirect, withAuthRedirect } from '../../hoc/withAuthRedirect';

function withRouter(Children) {
    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileComponent extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        this.props.getUser(userId)
        this.props.getStatus(userId)
        
    }

    render() {
        //  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/28932`).then(response => {
        //      this.props.setUsersProfile(response.data)})
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.ProfilePage.profile,
        status : state.ProfilePage.status,
        isAuth: state.Auth.isAuth,
    }
}


export default compose(connect(mapStateToProps, {setUsersProfile, getUser, getStatus, updateStatus}),
withRouter,
withAuthRedirect,
)(ProfileComponent)

// let WithUrlDataContainerComponent = withRouter(ProfileComponent)

// const ProfileContainer = connect(mapStateToProps, {setUsersProfile, getUser})(WithUrlDataContainerComponent)

// export default ProfileContainer
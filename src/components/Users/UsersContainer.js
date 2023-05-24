import React from 'react'
import { connect } from 'react-redux'
import { follow, getUsers, unfollow, setCurrentPage,} from "../../redux/UsersReducer";
import Users from './Users'
import Preloader from '../commen/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersConponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
        {this.props.isFetching ? <Preloader /> : null}
                <Users
                        unfollow={this.props.unfollow}
                        follow={this.props.follow}
                        totalUserCount={this.props.totalUserCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        Users={this.props.Users}
                    />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        Users: state.UsersPage.Users,
        pageSize: state.UsersPage.pageSize,
        totalUserCount: state.UsersPage.totalUserCount,
        currentPage: state.UsersPage.currentPage,
        isFetching: state.UsersPage.isFetching,

    }
}
let withRedirect = withAuthRedirect(UsersConponent)

const UsersContainer = connect(mapStateToProps, 
    {
        follow,
        unfollow,
        setCurrentPage,
        getUsers,
    })(withRedirect)

export default UsersContainer
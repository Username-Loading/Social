import { connect } from "react-redux";
import { AddPostActionCreator } from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
    return {
        NewTextPost: state.ProfilePage.NewTextPost,
        PostMessageData: state.ProfilePage.PostMessageData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (newTextPost) => {
            dispatch(AddPostActionCreator(newTextPost))
        },
    }
}

const MyPostContaoner = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostContaoner;
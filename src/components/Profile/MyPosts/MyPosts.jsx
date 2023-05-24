import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthPost, requared } from "../../utilit/validators";
import { Textarea } from "../../commen/FormsControls/FormControls";

const maxLength10 = maxLengthPost(10)


const MyPosts = (props) => {
    let PostMessageElements = props.PostMessageData.map(p => <Post message={p.message} like={p.like} />)

    let addNewPost = (velues) => {
        props.AddPost(velues.newTextPost)
    }

    return (
        <div>
            <div>
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
            <h3>My Post</h3>
            <div>
                <h4>New Post</h4>
                <div>
                    {PostMessageElements}
                </div>
            </div>
        </div>
    )
}

const myPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field name={"newTextPost"} placeholder="Write a post..." component={Textarea}
            validate={[requared, maxLength10]} />
        <button>Add post</button>
    </form>
}

const AddPostFormRedux = reduxForm({
    form: "addNewPost"
})(myPostForm)

export default MyPosts;
import React from "react";
import s from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog.jsx"
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../commen/FormsControls/FormControls";
import { maxLengthPost, requared } from "../utilit/validators";

const maxLength100 = maxLengthPost(100)

const Dialogs = (props) => {
    let DialogsElements = props.DialogsData.map(d => <Dialog name={d.name} id={d.id} img={d.img} />)
    let MessageElements = props.MessageData.map(m => <Message message={m.message} />)

    let addNewMessage = (velues) => {
        props.AddNewMessage(velues.newTextMessage)
    }

    return (
        <div className={s.dialogs}>
            <div>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessageElements}
                <AddMessageFormRedux  onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const MessageForm = (props) => {
    
    return <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder="Message..." component={Textarea} name={"newTextMessage"}
                    validate={[requared, maxLength100]}  />
                </div>
                <div>
                    <button>Send Message</button>
                </div>
    </form>
}

const AddMessageFormRedux = reduxForm({
    form: 'newMessage'
})(MessageForm)

export default Dialogs;
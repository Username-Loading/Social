import { AddMessageActionCreator} from "../../redux/MessageReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        DialogsData: state.MessagePage.DialogsData,
        MessageData: state.MessagePage.MessageData,
        NewTextMessage: state.MessagePage.NewTextMessage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddNewMessage: (newTextMessage) => {
            dispatch(AddMessageActionCreator(newTextMessage))
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;
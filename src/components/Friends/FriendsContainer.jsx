
import { connect } from "react-redux";
import Friends from "./Friends";


let mapSateToProps = (state) => {
    return {
        FriendsItem: state.NavBarPage.FriendsItem
    }
}

const FriendsContainer = connect(mapSateToProps) (Friends)

export default FriendsContainer;


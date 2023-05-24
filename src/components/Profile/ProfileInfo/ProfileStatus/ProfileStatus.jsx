import { connect } from "formik";
import React from "react";

class ProfileStatus extends React.Component{
    
    
    state = {
        editMode: false,
        status: this.props.status
    }
    

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    OnPostChange = (e) => {
        this.setState({
            status : e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status : this.props.status
            })
        }
    }


    render(){
        return(
            <>
            {!this.state.editMode &&
                        <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.OnPostChange} autoFocus={true} 
                    value={this.state.status} onBlur={this.deActivateEditMode} />
                </div>
            }
            </>
        )
    }
}

export default ProfileStatus
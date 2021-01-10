import React from 'react';


class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditMode = () => {
      this.setState({
         editMode: true
      })
   }

   unActivateEditMode = () => {
      this.setState({
         editMode: false
      })
      this.props.putUserStatus(this.state.status)
   }

   onInputChange = (e) => {
     this.setState( {
        status: e.currentTarget.value
     } );

   }

   render() {
      return (
         <>
            {!this.state.editMode &&
               <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Статус отсутствует'}</span>
            }
            {this.state.editMode &&
               <input autoFocus={true} onBlur={this.unActivateEditMode} onChange={this.onInputChange} value={this.state.status}/>
            }
         </>
      )

   }

}

export default ProfileStatus;
import React from 'react'
import {connect} from "react-redux";
import Settings from "./Settings";
import {savePhoto} from "../../redux/settings-reducer";

class SettingsContainer extends React.Component {

   render() {
      return (
         <Settings savePhoto={this.props.savePhoto}/>
      )
   }
}

let mapStateToProps = (state) => {
   return {

   }
}

export default connect(mapStateToProps, {savePhoto})(SettingsContainer);
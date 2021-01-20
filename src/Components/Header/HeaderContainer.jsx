import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";



class HeaderComponent extends React.Component {
   render()
   {
      return <Header {...this.props}/>;
   }
}

let mapStateToProps = (state) => {
   return {
      signIn: state.auth.signIn,
      login: state.auth.login,
   }
}


export default connect(mapStateToProps, {logout})(HeaderComponent);

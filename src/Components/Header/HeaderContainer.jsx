import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {SignIn, setAuthUserData} from "../../redux/auth-reducer";



class HeaderComponent extends React.Component {

   componentDidMount() {
      this.props.SignIn()
   }

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


export default connect(mapStateToProps, {setAuthUserData, SignIn})(HeaderComponent);

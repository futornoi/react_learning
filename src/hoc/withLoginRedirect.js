import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect = (state) => {
   return {signIn: state.auth.signIn,}
}

export const withLoginRedirect = (Component) => {
   class RedirectComponent extends React.Component {
      render() {
         if (!this.props.signIn) return <Redirect to='/login'/>;
         return <Component {...this.props}/>
      }
   }

   return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";


class HeaderComponent extends React.Component {

   componentDidMount() {
      authAPI.login().then(response => {
         if(response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            this.props.setAuthUserData(id, login, email)
         }
      })
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderComponent);

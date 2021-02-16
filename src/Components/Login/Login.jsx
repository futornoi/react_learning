import React from 'react';
import style from './Login.module.css';
import {reduxForm} from "redux-form";
import {createField, Element} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const Input = Element('input');

const LoginForm = ({handleSubmit, error}) => {
   return (
      <div className={style.container}>
         <form onSubmit={handleSubmit}>
            <div className={style.title}>
               Login
            </div>
            <div>
               {createField(style.formInput, "text", "email", Input, "email", [required])}
               {createField(style.formInput, "password", "password", Input, "password", [required])}
               {createField(null, "checkbox", null, Input, "rememberMe", null, null, 'remember me')}
               {error && <div className={style.error}>{error}</div>}
               <div>
                  <button className={style.formBtn}>submit</button>
               </div>
            </div>
         </form>
      </div>
   )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = ({logIn, signIn}) => {

   const onSubmit = (value) => {
      logIn(value.email, value.password, value.rememberMe)
      console.log(value)
   }

   if (signIn) return <Redirect to='/profile'/>;

   return (
      <LoginReduxForm onSubmit={onSubmit}/>
   )
}


const mapStateToProps = (state) => {
 return {
    signIn: state.auth.signIn,
 }
}


export default connect(mapStateToProps, {logIn})(Login);
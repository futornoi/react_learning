import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {logIn} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";



const Input = Element('input');

const LoginForm = (props) => {
   return (
      <div className={style.container}>
         <form onSubmit={props.handleSubmit}>
            <div className={style.title}>
               Login
            </div>
            <div>
               <div>
                  <Field className={style.formInput} type="text" placeholder='email' component={Input} name='email'
                         validate={[required]}/>
               </div>
               <div>
                  <Field className={style.formInput} type="password" placeholder='password' component={Input} name='password'
                         validate={[required]}/>
               </div>
               <div>
                  <Field type="checkbox" component={Input} name='rememberMe'/>remember me
               </div>
               {props.error && <div className={style.error}>{props.error}</div>}
               <div>
                  <button className={style.formBtn} type='submit'>submit</button>
               </div>
            </div>
         </form>
      </div>
   )
}

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)


const Login = (props) => {

   const onSubmit = (value) => {
      props.logIn(value.email, value.password, value.rememberMe)
   }

   if (props.signIn) return <Redirect to='/profile'/>;

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
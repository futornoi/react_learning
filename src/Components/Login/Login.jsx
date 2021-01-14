import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
   return (
      <div className={style.container}>
         <form onSubmit={props.handleSubmit}>
            <div className={style.title}>
               Login
            </div>
            <div>
               <div>
                  <Field className={style.formInput} type="text" placeholder='login' component='input' name='login'/>
               </div>
               <div>
                  <Field className={style.formInput} type="text" placeholder='password' component='input' name='password'/>
               </div>
               <div>
                  <Field type="checkbox" component='input' name='rememberMe'/>remember me
               </div>
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
      console.log(value);
   }
   return (
      <LoginReduxForm onSubmit={onSubmit}/>
   )
}

export default Login;
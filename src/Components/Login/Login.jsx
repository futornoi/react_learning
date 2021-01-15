import React from 'react';
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {Element} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";


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
                  <Field className={style.formInput} type="text" placeholder='login' component={Input} name='login'
                         validate={[required]}/>
               </div>
               <div>
                  <Field className={style.formInput} type="text" placeholder='password' component={Input} name='password'
                         validate={[required]}/>
               </div>
               <div>
                  <Field type="checkbox" component={Input} name='rememberMe'/>remember me
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
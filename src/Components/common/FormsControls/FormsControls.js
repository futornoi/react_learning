import React from "react";
import style from './FormsControls.module.css'
import {Field} from "redux-form";
import cn from 'classnames';

export const Element = (Element) => ({input, meta: {touched, error}, ...props}) => {
   const hasError = touched && error;

   return (
      <div className={cn(style.formControl,
         {[style.error] : hasError } )}>
         <div>
            <Element {...input} {...props}/>
         </div>
         {hasError && <span>{error}</span>}
      </div>
   )
}


export const createField = (className, type, placeholder, component, name, validate, props = {}, text = '') => {
   return (
      <div>
         <Field className={className} type={type} placeholder={placeholder} component={component} name={name}
                validate={validate} {...props}/>{text}
      </div>
   )
}
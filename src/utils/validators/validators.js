

export const required = (values) => {
   if(values) return undefined;
   return 'Required!'
}

export const maxLength = (max) => (values) => {
   if(values.length > max) return `Must be ${max} characters or less`;

   return undefined
}
import React, {useState, useEffect} from 'react';


const ProfileStatus = (props) => {

   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const activateEditMode = () => {
      setEditMode(true);
   }

   const unActivateEditMode = () => {
      setEditMode(false);
      props.putUserStatus(status)
   }

   const onInputChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   return (
      <>
         {!editMode &&
         <span onDoubleClick={activateEditMode}>{status || 'Статус отсутствует'}</span>
         }
         {editMode &&
         <input autoFocus={true} onBlur={unActivateEditMode} onChange={onInputChange} value={status}/>
         }
      </>
   )


}

export default ProfileStatus;
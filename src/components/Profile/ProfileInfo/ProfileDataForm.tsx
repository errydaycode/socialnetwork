import React from "react";
import {UserProfileType} from "redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "components/common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css'


const ProfileDataForm : React.FC<InjectedFormProps<UserProfileType>> = ({handleSubmit, initialValues, error}) => {

   console.log(initialValues)
  // const {lookingForAJobDescription, lookingForAJob, fullName, aboutMe, userId, contacts,} = profile

  return (
    <form onSubmit={handleSubmit}>
          <button >save</button>
      <div>
      </div>
      {error &&  <div className={s.formSummaryError}>{error}</div>}
      <div>
        <b>Full Name</b> : <div><Field placeholder={'Full name'} name={'fullName'} component={Input} validate={[]}/> </div>
      </div>
      <div>
        <b>Looking for a job</b>  : <div><Field placeholder={''} name={'lookingForAJob'} component={Input} type={'checkbox'} validate={[]}/> </div>
      </div>
          <div>
              <b>My professional skills</b> : <div><Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Input} validate={[]}/> </div>
          </div>
      <div>
        <b>About me:</b> <div><Field placeholder={'About me'} name={'aboutMe'} component={Input} validate={[]}/> </div>
      </div>

      <div>
        <b>Contacts:</b> {Object.keys(initialValues.contacts || {})?.map((key) => {
              return <div key={key} className={s.contact}>
              <b>{key} :   <div><Field placeholder={key} name={'contacts.' + key} component={Input} validate={[]}/> </div>  </b>
              </div>
      })}
      </div>
    </form>
  )
}

export const ProfileDataFormReduxForm = reduxForm<UserProfileType>({
  form: 'edit-profile'
})(ProfileDataForm)


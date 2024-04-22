import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "redux/store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "./../../../assets/images/user.png"
import {ProfileDataFormReduxForm} from "./ProfileDataForm";
import {updateProfileInfoType} from "api/api";


type ProfileInfoProps = {
  profile: UserProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean

  savePhoto: (newPhoto: File) => void
  saveProfile: (formData: updateProfileInfoType) => Promise<any>
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}: ProfileInfoProps) => {

  const [editMode, setEditMode] = useState(false)

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget?.files?.length) {
      savePhoto(e.currentTarget.files[0])
    }
  }
  const onSubmit = (formData: any) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
    //
  }

  return (

    <div>
      <div>
      </div>
      <div className={s.description}>
        <img src={profile.photos?.large || UserPhoto} alt="userAvatar" className={s.userAvatar}/>
        {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        {editMode ? <ProfileDataFormReduxForm onSubmit={onSubmit} initialValues={profile} /> :
          <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => {
            setEditMode(true)
          }}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
      </div>
    </div>

  );
};

type ContactPropsType = {
  contactTitle: string
  contactValue: string
}

type Props = {
  profile: UserProfileType
  isOwner: boolean
  activateEditMode: () => void
}

export const ProfileData = ({profile, isOwner, activateEditMode}: Props) => {

  const {lookingForAJobDescription, lookingForAJob, fullName, aboutMe, userId, contacts,} = profile
  return <div>
    {isOwner && <div>
        <button onClick={activateEditMode}>Edit info</button>
    </div>}
    <div>
      <b>Full Name</b> {fullName}
    </div>
    <div>
      <b>Looking for a job:</b> {lookingForAJob ? 'yes' : 'no'}
    </div>
    {
      lookingForAJob &&
        <div>
            <b>My professional skills</b> : {lookingForAJobDescription}
        </div>
    }
    <div>
      <b>About me:</b> {aboutMe}
    </div>
    <div>
      <b>Contacts:</b> {Object.keys(contacts || {})?.map((key) => {
      // @ts-ignore
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
    })}
    </div>


  </div>
}



export const Contact = ({contactTitle, contactValue}: ContactPropsType) => {
  return <div className={s.contact}>
    <b>{contactTitle}</b>: {contactValue}
  </div>
}

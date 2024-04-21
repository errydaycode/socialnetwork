import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserPhoto from "./../../../assets/images/user.png"

type ProfileInfoProps = {
  profile: UserProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean

  savePhoto: (newPhoto: File) => void
}

export const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}: ProfileInfoProps) => {
  //debugger
  // console.log(props.profile.contacts.vk)

  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if(e.currentTarget?.files?.length) {
        savePhoto(e.currentTarget.files[0])
      }
  }

  return (
    <div>
      <div>
        {/*<img*/}
        {/*    src="https://pristor.ru/wp-content/uploads/2018/10/%D0%9B%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BE%D0%B1%D0%BE%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B8-%D0%B2-%D0%92%D0%9A%D0%BE%D0%BD%D1%82%D0%B0%D0%BA%D1%82%D0%B5-1590%D1%85400-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-6-1024x258.jpg"*/}
        {/*    alt=""*/}
        {/*    className={s.backImage}*/}
        {/*/>*/}
      </div>
      <div className={s.description}>
        <img src={profile.photos?.large || UserPhoto} alt="userAvatar" className={s.userAvatar}/>
        {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
        <div>{profile.aboutMe}</div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        {/*<h3>My Contacts :</h3>*/}
        {/*<div>GITHUB : {props.profile.contacts.github === null ? 'user did not add any info' : props.profile.contacts.github}</div>*/}
        {/*<div> VK : {props.profile.contacts.vk === null ? 'user did not add any info' : props.profile.contacts.vk}</div>*/}
        {/*<div> FACEBOOK : {props.profile.contacts.facebook === null ? 'user did not add any info' :  props.profile.contacts.facebook}</div>*/}

      </div>
    </div>

  );
};


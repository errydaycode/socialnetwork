import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoProps = {
    profile: UserProfileType
    status: string
    updateStatus: (status: string) => void

}

export const ProfileInfo = (props: ProfileInfoProps) => {
    //debugger
   // console.log(props.profile.contacts.vk)
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
                <img src={props.profile.photos?.small} alt="userAvatar" className={s.userAvatar}/>
                <div>{props.profile.aboutMe}</div>
                <ProfileStatus status={props.status}  updateStatus={props.updateStatus}/>
                {/*<h3>My Contacts :</h3>*/}
                {/*<div>GITHUB : {props.profile.contacts.github === null ? 'user did not add any info' : props.profile.contacts.github}</div>*/}
                {/*<div> VK : {props.profile.contacts.vk === null ? 'user did not add any info' : props.profile.contacts.vk}</div>*/}
                {/*<div> FACEBOOK : {props.profile.contacts.facebook === null ? 'user did not add any info' :  props.profile.contacts.facebook}</div>*/}

            </div>
        </div>

    );
};


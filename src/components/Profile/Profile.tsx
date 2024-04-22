import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {UserProfileType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateProfileInfoType} from "api/api";


type ProfileProps = {
  profile: UserProfileType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (newPhoto: File) => void
  saveProfile: (formData: updateProfileInfoType) => Promise<any>

}

export const Profile = ({profile, isOwner, status, updateStatus, savePhoto, saveProfile}: ProfileProps) => {
  //console.log(props)
  return (
    <div>
      <ProfileInfo profile={profile}
                   status={status}
                   updateStatus={updateStatus}
                    isOwner={isOwner}
                   savePhoto={savePhoto}
                   saveProfile={saveProfile}
      />
      <MyPostsContainer/>
    </div>
  );
};


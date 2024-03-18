import React from 'react';
import s from './ProfileInfo.module.css'

type ProfileStatusType = {
    status: string
}


const ProfileStatus = ({status}: ProfileStatusType) => {
    return (
        <div>
            <div>
                <span>{status}</span>
            </div>
            <div>
              <input value={status}/>
            </div>
        </div>
    );
};

export default ProfileStatus;
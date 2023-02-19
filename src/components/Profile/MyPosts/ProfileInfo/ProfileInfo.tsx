import React from 'react';
import s from './ProfileInfo.module.css'



export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.bacancytechnology.com/blog/wp-content/uploads/2021/03/17-03-2021-Wednesday%E2%80%93-React-Banner.png"
                    alt=""/>
            </div>
            <div className={s.description}>
                ava + description
            </div>
        </div>

    );
};

